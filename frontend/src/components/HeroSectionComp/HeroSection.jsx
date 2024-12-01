const HeroSection = () => {
  return (
    <section className=' py-28 lg:py-40 max-w-7xl mx-auto'>
      <div className='container mx-auto px-6 z-10 text-center text'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
          Revolutionize{' '}
          <span className='text-text-heading'>Project Management</span> with
          AI-Powered Tools
        </h1>
        <p className='text-lg sm:text-xl mb-6 text-text-primary/95'>
          Harness AI, smart forecasting, real-time collaboration, and advanced
          workflow automation to streamline your projects and achieve your goals
          faster.
        </p>
        <button
          href='#signup'
          className='bg-button-cyanButton  hover:bg-button-cyanButtonHover text-text-heading border-text-heading py-3 px-6 rounded-full text-lg font-semibold   transition border  duration-300'
        >
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
