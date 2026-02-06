import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const ForgotPassword = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        otp: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSendOTP = async () => {
        if (!formData.email) {
            setError('Email is required');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: formData.email })
            });

            const data = await response.json();

            if (data.success) {
                setSuccess('Password reset code sent to your email');
                setStep(2);
            } else {
                setError(data.message || 'Failed to send reset code');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async () => {
        if (!formData.otp || !formData.newPassword || !formData.confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.newPassword.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    otp: formData.otp,
                    newPassword: formData.newPassword
                })
            });

            const data = await response.json();

            if (data.success) {
                setSuccess('Password reset successfully! You can now login with your new password.');
                setTimeout(() => {
                    handleClose();
                }, 2000);
            } else {
                setError(data.message || 'Failed to reset password');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setStep(1);
        setFormData({ email: '', otp: '', newPassword: '', confirmPassword: '' });
        setError('');
        setSuccess('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md border border-slate-800 relative">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="p-6 border-b border-slate-800">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Lock className="text-cyan-400" size={24} />
                        Reset Password
                    </h2>
                    <p className="text-zinc-400 text-sm mt-1">
                        {step === 1 && 'Enter your email to receive a reset code'}
                        {step === 2 && 'Enter the OTP sent to your email'}
                    </p>
                </div>

                {/* Content */}
                <div className="p-6">
                    {error && (
                        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm">
                            {success}
                        </div>
                    )}

                    {/* Step 1: Enter Email */}
                    {step === 1 && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-zinc-300 mb-2 font-medium">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className="w-full bg-slate-800 text-white pl-10 pr-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleSendOTP}
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Reset Code'}
                            </button>
                        </div>
                    )}

                    {/* Step 2: Enter OTP and New Password */}
                    {step === 2 && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-zinc-300 mb-2 font-medium">
                                    Verification Code
                                </label>
                                <input
                                    type="text"
                                    name="otp"
                                    value={formData.otp}
                                    onChange={handleChange}
                                    placeholder="Enter 6-digit code"
                                    maxLength={6}
                                    className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-center text-2xl tracking-widest"
                                />
                            </div>

                            <div>
                                <label className="block text-zinc-300 mb-2 font-medium">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full bg-slate-800 text-white px-4 py-3 pr-12 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-300 transition-colors"
                                    >
                                        {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-zinc-300 mb-2 font-medium">
                                    Confirm New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full bg-slate-800 text-white px-4 py-3 pr-12 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-300 transition-colors"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleResetPassword}
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Resetting...' : 'Reset Password'}
                            </button>

                            <button
                                onClick={() => setStep(1)}
                                className="w-full text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                            >
                                ← Back to email
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
