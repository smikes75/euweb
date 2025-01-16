
import { PageHeader } from '../components/PageHeader';
import { BlogList } from '../components/blog/BlogList';
import { Helmet } from 'react-helmet-async';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Data Recovery Blog - Expert Insights & Technical Guides | DataHelp.eu</title>
        <meta name="description" content="Expert articles about data recovery, RAID systems, and data storage technologies. Learn from industry professionals about data recovery techniques and best practices." />
        <meta name="keywords" content="data recovery blog, RAID recovery, HDD repair, SSD recovery, data recovery guides" />
        <link rel="canonical" href="https://datahelp.eu/blog" />
      </Helmet>

      <PageHeader
        title="Data Recovery Blog"
        subtitle="Expert insights, technical guides, and industry news"
        backgroundImage="blog-bg.jpg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <BlogList />
      </div>
    </div>
  );
}