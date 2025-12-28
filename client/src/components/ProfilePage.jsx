import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../utils/api';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user: contextUser, updateUser, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: '', year: '', branch: '' });

  useEffect(() => {
    if (contextUser) {
      setForm({ 
        name: contextUser.name || '', 
        year: contextUser.year || '', 
        branch: contextUser.branch || '' 
      });
    }
  }, [contextUser]);

  const navigate = useNavigate();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const fd = new FormData();
      if (file) fd.append('profilePic', file);
      fd.append('name', form.name);
      fd.append('year', form.year);
      fd.append('branch', form.branch);

      const res = await authAPI.updateProfile(fd);
      if (res.data.success) {
        updateUser(res.data.user);
        setEditing(false);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Update failed');
      if (err.response?.status === 401 || err.response?.status === 403) {
        await logout();
        navigate('/Login');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-6 text-white">Loading...</div>;
  if (error) return <div className="p-6 text-red-400">{error}</div>;
  if (!contextUser) return <div className="p-6 text-zinc-400">No profile available. Please login.</div>;

  return (
    <div className="min-h-screen p-6 bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto bg-slate-800 p-6 rounded-lg border border-slate-700">
        <div className="flex items-center gap-4">
          <img src={contextUser.profilePic || '/'} onError={(e)=>{e.target.src='https://via.placeholder.com/120'}} alt="profile" className="w-28 h-28 rounded-full object-cover border" />
          <div>
            <h2 className="text-2xl font-bold">{contextUser.name}</h2>
            <p className="text-zinc-400">{contextUser.email}</p>
            <p className="text-zinc-400">{contextUser.year} • {contextUser.branch}</p>
            <p className="text-zinc-400 text-sm mt-1">ID: {contextUser._id || contextUser.id}</p>
            {contextUser.createdAt && <p className="text-zinc-400 text-sm">Joined: {new Date(contextUser.createdAt).toLocaleString()}</p>}
          </div>
        </div>

        <div className="mt-6">
          {!editing ? (
            <button onClick={()=>setEditing(true)} className="bg-cyan-500 px-4 py-2 rounded">Edit Profile</button>
          ) : (
            <form onSubmit={handleUpdate} className="space-y-4 mt-4">
              <div>
                <label className="block text-zinc-300">Full name</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full bg-slate-800 p-2 rounded" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input name="year" value={form.year} onChange={handleChange} className="bg-slate-800 p-2 rounded" placeholder="Year" />
                <input name="branch" value={form.branch} onChange={handleChange} className="bg-slate-800 p-2 rounded" placeholder="Branch" />
              </div>
              <div>
                <label className="block text-zinc-300">Profile picture</label>
                <input type="file" accept="image/*" onChange={handleFile} />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="bg-cyan-500 px-4 py-2 rounded">Save</button>
                <button type="button" onClick={()=>setEditing(false)} className="bg-slate-700 px-4 py-2 rounded">Cancel</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
