import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useAttorneys } from '../../hooks/useAttorneys';
import { useArticles } from '../../hooks/useArticles';
import { useReviews } from '../../hooks/useReviews';
import {
  Users,
  FileText,
  Star,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Eye,
  Plus,
  Edit,
  Trash2,
  LogOut,
  FormInputIcon
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useClients } from '../../hooks/useClient';
import { supabase } from '../../lib/supabase';

const AdminDashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { attorneys } = useAttorneys();
  const { articles } = useArticles(false);
  const { reviews } = useReviews(false);
  const [activeTab, setActiveTab] = useState('overview');

  const { clients, fetchClients, loading: clientsLoading } = useClients();

  const handleStatusChange = async (clientId: string, status: 'new' | 'contacted' | 'resolved') => {
    const { error } = await supabase!
      .from('contact_submissions')
      .update({ status })
      .eq('id', clientId);

    if (error) {
      toast.error('Failed to update status');
      console.error(error);
    } else {
      toast.success('Status updated');
      fetchClients(); // refresh list
    }
  };

  // Calculate clients for this month and last month
  const thisMonthClients = clients.filter(
    c => new Date(c.created_at).getMonth() === new Date().getMonth()
  ).length;

  const lastMonthClients = clients.filter(
    c => new Date(c.created_at).getMonth() === new Date().getMonth() - 1
  ).length;

  // Determine positive/negative change
  const isPositiveChange = thisMonthClients >= lastMonthClients;

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out successfully');
  };

  const stats = [
    {
      title: 'Total Attorneys',
      value: attorneys.length,
      icon: <Users className="h-8 w-8 text-rosegold" />,
      change: '+2 this month',
      positive: true
    },
    {
      title: 'Published Articles',
      value: articles.filter(a => a.published).length,
      icon: <FileText className="h-8 w-8 text-rosegold" />,
      change: '+5 this month',
      positive: true
    },
    {
      title: 'Client Reviews',
      value: reviews.filter(r => r.approved).length,
      icon: <Star className="h-8 w-8 text-rosegold" />,
      change: '+12 this month',
      positive: true
    },
    {
      title: 'Pending Reviews',
      value: reviews.filter(r => !r.approved).length,
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      change: '3 need approval',
      positive: false
    },
    {
      title: 'Clients This Month',
      value: clients.filter(c => new Date(c.created_at).getMonth() === new Date().getMonth()).length,
      icon: <Users className="h-8 w-8 text-accent" />,
      change: `${clients.filter(c => new Date(c.created_at).getMonth() === new Date().getMonth() - 1).length} last month`,
      positive: isPositiveChange
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'attorneys', label: 'Attorneys', icon: <Users className="h-5 w-5" /> },
    { id: 'articles', label: 'Articles', icon: <FileText className="h-5 w-5" /> },
    { id: 'reviews', label: 'Reviews', icon: <Star className="h-5 w-5" /> },
    { id: 'clients', label: 'Clients', icon: <FormInputIcon className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-primary-900 font-serif">Admin Dashboard</h1>
              <p className="text-primary-600 mt-1">Welcome back, {user?.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-900 to-primary-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-rosegold hover:to-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6 card-hover">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="bg-gradient-to-br from-rosegold/10 to-accent/10 p-3 rounded-2xl">
                  {stat.icon}
                </div>
                <div className={`flex items-center space-x-1 text-sm ${stat.positive ? 'text-green-600' : 'text-amber-600'
                  }`}>
                  <TrendingUp className="h-4 w-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-1">{stat.value}</h3>
              <p className="text-primary-600 font-medium">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="card mb-8">
          <div className="border-b border-primary-100">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-300 ${activeTab === tab.id
                    ? 'border-rosegold text-rosegold'
                    : 'border-transparent text-primary-600 hover:text-primary-900 hover:border-primary-300'
                    }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary-900 font-serif">Dashboard Overview</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary-50 to-rosegold/5 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold text-primary-900 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-primary-700">New article published</span>
                        <span className="text-primary-500 text-sm">2 hours ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-primary-700">Client review approved</span>
                        <span className="text-primary-500 text-sm">4 hours ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-primary-700">Attorney profile updated</span>
                        <span className="text-primary-500 text-sm">1 day ago</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary-50 to-rosegold/5 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold text-primary-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center space-x-3 bg-white p-3 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                        <Plus className="h-5 w-5 text-rosegold" />
                        <span className="text-primary-700">Add New Attorney</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 bg-white p-3 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                        <FileText className="h-5 w-5 text-rosegold" />
                        <span className="text-primary-700">Create New Article</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 bg-white p-3 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                        <Eye className="h-5 w-5 text-rosegold" />
                        <span className="text-primary-700">Review Pending Items</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'attorneys' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-primary-900 font-serif">Manage Attorneys</h2>
                  <button className="bg-gradient-to-r from-rosegold to-accent text-white px-6 py-3 rounded-xl font-semibold hover:from-accent hover:to-rosegold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <Plus className="h-5 w-5 inline mr-2" />
                    Add Attorney
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-primary-200">
                        <th className="text-left py-4 px-4 font-semibold text-primary-900">Name</th>
                        <th className="text-left py-4 px-4 font-semibold text-primary-900">Title</th>
                        <th className="text-left py-4 px-4 font-semibold text-primary-900">Experience</th>
                        <th className="text-left py-4 px-4 font-semibold text-primary-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attorneys.map((attorney) => (
                        <tr key={attorney.id} className="border-b border-primary-100 hover:bg-primary-50 transition-colors duration-300">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={attorney.image_url || 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=100'}
                                alt={attorney.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <span className="font-medium text-primary-900">{attorney.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-primary-700">{attorney.title}</td>
                          <td className="py-4 px-4 text-primary-700">{attorney.experience_years} years</td>
                          <td className="py-4 px-4">
                            <div className="flex space-x-2">
                              <button className="p-2 text-primary-600 hover:text-rosegold hover:bg-rosegold/10 rounded-lg transition-all duration-300">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-primary-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'articles' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-primary-900 font-serif">Manage Articles</h2>
                  <button className="bg-gradient-to-r from-rosegold to-accent text-white px-6 py-3 rounded-xl font-semibold hover:from-accent hover:to-rosegold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <Plus className="h-5 w-5 inline mr-2" />
                    New Article
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.slice(0, 6).map((article) => (
                    <div key={article.id} className="card overflow-hidden">
                      <img
                        src={article.image_url || 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400'}
                        alt={article.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${article.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-amber-100 text-amber-800'
                            }`}>
                            {article.published ? 'Published' : 'Draft'}
                          </span>
                          <span className="text-xs text-primary-500">{article.category}</span>
                        </div>
                        <h3 className="font-semibold text-primary-900 mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-primary-600 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-primary-100 text-primary-700 py-2 px-3 rounded-lg hover:bg-primary-200 transition-colors duration-300 text-sm font-medium">
                            Edit
                          </button>
                          <button className="flex-1 bg-red-100 text-red-700 py-2 px-3 rounded-lg hover:bg-red-200 transition-colors duration-300 text-sm font-medium">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary-900 font-serif">Manage Reviews</h2>

                <div className="space-y-4">
                  {reviews.slice(0, 5).map((review) => (
                    <div key={review.id} className="card p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-primary-900">{review.client_name}</span>
                              <span className="text-primary-600">•</span>
                              <span className="text-primary-600 text-sm">{review.client_title}</span>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating
                                    ? 'text-accent fill-current'
                                    : 'text-primary-300'
                                    }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-primary-700 mb-3">{review.content}</p>
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${review.approved
                              ? 'bg-green-100 text-green-800'
                              : 'bg-amber-100 text-amber-800'
                              }`}>
                              {review.approved ? 'Approved' : 'Pending'}
                            </span>
                            {review.featured && (
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rosegold/20 text-rosegold">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          {!review.approved && (
                            <button className="bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors duration-300 text-sm font-medium">
                              Approve
                            </button>
                          )}
                          <button className="bg-red-100 text-red-700 py-2 px-4 rounded-lg hover:bg-red-200 transition-colors duration-300 text-sm font-medium">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'clients' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary-900 font-serif">Manage Clients</h2>

                {clientsLoading ? (
                  <p className="text-primary-600">Loading clients...</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-primary-200">
                          <th className="text-left py-4 px-4 font-semibold text-primary-900">Name</th>
                          <th className="text-left py-4 px-4 font-semibold text-primary-900">Email</th>
                          <th className="text-left py-4 px-4 font-semibold text-primary-900">Phone</th>
                          <th className="text-left py-4 px-4 font-semibold text-primary-900">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {clients.map((client) => (
                          <tr key={client.id} className="border-b border-primary-100 hover:bg-primary-50 transition-colors duration-300">
                            <td className="py-4 px-4 text-primary-700">{client.name}</td>
                            <td className="py-4 px-4 text-primary-700">{client.email}</td>
                            <td className="py-4 px-4 text-primary-700">{client.phone}</td>
                            <td className="py-4 px-4">
                              <select
                                value={client.status}
                                onChange={(e) => handleStatusChange(client.id, e.target.value as 'new' | 'contacted' | 'resolved')}
                                className="border border-primary-200 rounded-lg px-3 py-1 text-primary-700 bg-white focus:ring-2 focus:ring-rosegold transition-all duration-300"
                              >
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="resolved">Resolved</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;