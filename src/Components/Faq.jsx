import supportteam from './images/supportteam.png'
const FAQ = () => {
    return (
      <div className="p-8 max-w-4xl mx-auto">
      
        <h2 className="text-3xl font-bold text-center mb-2">Frequently asked questions</h2>
        <p className="text-center  text-gray-600 mt-4 mb-8">
          Everything you need to know about the product and billing.
        </p>
  
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <button className="flex justify-between items-center w-full py-3 text-left text-base font-medium text-gray-800">
              Is there a free trial available?
              <span className="border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-gray-400">
                −
              </span>
            </button>
            <p className="text-gray-600 text-justify mt-2 text-sm">
              Yes, you can try us for free for 30 days. If you want, we’ll provide
              you with a free, personalized 30-minute onboarding call to get you
              up and running as soon as possible.
            </p>
          </div>
  
          <div className="border-b border-gray-200">
            <button className="flex justify-between items-center w-full py-3 text-left text-base font-medium text-gray-800">
              Can I change my plan later?
              <span className="border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-gray-400">
                +
              </span>
            </button>
          </div>
          <div className="border-b border-gray-200">
            <button className="flex justify-between items-center w-full py-3 text-left text-base font-medium text-gray-800">
              What is your cancellation policy?
              <span className="border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-gray-400">
                +
              </span>
            </button>
          </div>
          <div className="border-b border-gray-200">
            <button className="flex justify-between items-center w-full py-3 text-left text-base font-medium text-gray-800">
              Can other info be added to an invoice?
              <span className="border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-gray-400">
                +
              </span>
            </button>
          </div>
          <div className="border-b border-gray-200">
            <button className="flex justify-between items-center w-full py-3 text-left text-base font-medium text-gray-800">
              How does billing work?
              <span className="border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-gray-400">
                +
              </span>
            </button>
          </div>
          <div className="border-b border-gray-200">
            <button className="flex justify-between items-center w-full py-3 text-left text-base font-medium text-gray-800">
              How do I change my account email?
              <span className="border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-gray-400">
                +
              </span>
            </button>
          </div>
        </div>
  
        <div className="mt-12 flex flex-col bg-[#F9FAFB] items-center text-center">
          <img
           src={supportteam }
            alt="Support team"
            className="w-auto h-auto rounded-full mb-4"
          />
          <h3 className="text-lg font-bold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Can’t find the answer you’re looking for? Please chat with our friendly team.
          </p>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-lg text-sm">
            Get in touch
          </button>
        </div>
      </div>
    );
  };
  
  export default FAQ;
  