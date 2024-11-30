const Features = () => {
  const features = [
    {
      title: 'AI-Powered Forecasting',
      description:
        'Predict project outcomes and deadlines with unparalleled accuracy.',
      icon: 'icon',
    },
    {
      title: 'Real-Time Collaboration',
      description: 'Work seamlessly with your team, no matter where you are.',
      icon: 'react icon',
    },
    {
      title: 'Workflow Automation',
      description:
        'Automate repetitive tasks to save time and focus on what matters.',
      icon: 'react icon',
    },
  ];

  return (
    <section className=' mb-12'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <h2 className='text-3xl lg:text-4xl font-bold mb-12'>
          Features That <span className='text-text-heading'>Empower</span> You
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='card-shine-effect p-6 bg-card-background shadow-md rounded-lg   cursor-pointer'
            >
              <img
                src={feature.icon}
                alt={`${feature.title} icon`}
                className='mx-auto mb-4 h-12'
              />
              <h3 className='text-card-text text-xl font-semibold mb-2'>
                {feature.title}
              </h3>
              <p className='text-card-text/60'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
