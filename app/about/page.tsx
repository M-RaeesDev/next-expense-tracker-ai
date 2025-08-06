import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-teal-900/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>Powered by AI Technology</span>
            <span className='sm:hidden'>AI Technology</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight'>
            About{' '}
            <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
              ExpenseTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Your intelligent companion for tracking expenses and managing your
            finances with cutting-edge AI-powered insights.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10'>Start Your Journey</span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>
            <Link
              href='/contact'
              className='group border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500'></div>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
            Our Mission
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100 px-2 sm:px-0'>
            Transforming Financial Management with{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>AI</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto'>
            At ExpenseTracker AI, we leverage cutting-edge artificial
            intelligence to revolutionize how individuals achieve financial
            wellness. Our AI analyzes your spending patterns to deliver
            personalized recommendations and actionable insights that lead to
            better budgeting and financial freedom.
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50'>
              <div className='text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2'>
                10K+
              </div>
              <div className='text-gray-600 dark:text-gray-400 font-medium'>
                Active Users
              </div>
            </div>
            <div className='bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-2xl border border-green-100 dark:border-green-800/50'>
              <div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>
                $2M+
              </div>
              <div className='text-gray-600 dark:text-gray-400 font-medium'>
                Money Tracked
              </div>
            </div>
            <div className='bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-teal-100 dark:border-teal-800/50'>
              <div className='text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2'>
                99%
              </div>
              <div className='text-gray-600 dark:text-gray-400 font-medium'>
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
              Features
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100'>
              Why Choose{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                ExpenseTracker AI?
              </span>
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Discover the powerful features that make our AI-driven platform
              the smart choice for modern financial management.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg mb-6'>
                  <span className='text-white text-xl'>🤖</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
                  AI-Powered Insights
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Get intelligent analysis of your spending patterns with
                  personalized AI recommendations and automated category
                  suggestions that learn from your behavior.
                </p>
              </div>
            </div>

            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg mb-6'>
                  <span className='text-white text-xl'>✨</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
                  Smart Categorization
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Let our AI automatically categorize your expenses with 99%
                  accuracy and provide tailored recommendations to enhance your
                  budget management effortlessly.
                </p>
              </div>
            </div>

            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg mb-6'>
                  <span className='text-white text-xl'>📊</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
                  Intelligent Dashboard
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Experience a modern, AI-enhanced interface with real-time
                  insights, interactive financial analytics, and beautiful
                  visualizations that make sense of your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-full blur-2xl'></div>
        <div className='absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-2xl'></div>

        <div className='max-w-4xl mx-auto relative z-10'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
              Our Story
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100'>
              Built for the{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                Future
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                ExpenseTracker AI was born from the vision of creating truly
                intelligent financial management tools. Our team of financial
                experts, data scientists, and technologists came together to
                solve a critical problem: making personal finance management
                smarter, more intuitive, and more effective.
              </p>
              <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                Since our launch, we&#39;ve helped thousands of users achieve
                better budgeting and improve their overall financial health
                through the power of artificial intelligence. Every feature is
                designed with user experience and financial wellness in mind.
              </p>
              <div className='flex items-center gap-4 pt-4'>
                <div className='flex -space-x-2'>
                  <div className='w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full border-2 border-white dark:border-gray-800'></div>
                  <div className='w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border-2 border-white dark:border-gray-800'></div>
                  <div className='w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full border-2 border-white dark:border-gray-800'></div>
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>
                  <div className='font-semibold'>Trusted by 10,000+ users</div>
                  <div>Join our growing community</div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/50'>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-gray-100 font-medium'>
                    Founded in 2024
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-gray-100 font-medium'>
                    AI-First Approach
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-teal-500 dark:bg-teal-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-gray-100 font-medium'>
                    Global Impact
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-gray-100 font-medium'>
                    User-Centric Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500'></div>

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg'>
            <span className='w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
            Ready to Transform Your Finances?
          </div>

          <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100'>
            Take Control of Your{' '}
            <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
              Financial Future
            </span>
          </h2>

          <p className='text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed'>
            Join thousands of users who have already transformed their financial
            habits with ExpenseTracker AI. Start your journey towards smarter
            budgeting today.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10 flex items-center gap-2'>
                Get Started Free
                <span className='text-lg'>→</span>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>

            <Link
              href='/contact'
              className='group border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2'
            >
              Contact Us
              <span className='text-lg group-hover:translate-x-0.5 transition-transform duration-200'>
                💬
              </span>
            </Link>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2'>
                Free
              </div>
              <div className='text-gray-600 dark:text-gray-400'>
                No credit card required
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>
                24/7
              </div>
              <div className='text-gray-600 dark:text-gray-400'>
                AI-powered support
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2'>
                Instant
              </div>
              <div className='text-gray-600 dark:text-gray-400'>
                Setup in minutes
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;