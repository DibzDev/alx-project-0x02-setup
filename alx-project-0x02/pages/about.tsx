import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">About Page</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <p className="text-lg text-gray-700 mb-4">
            This is the About page of our Next.js application.
          </p>
          <p className="text-gray-600 mb-6">
            We're learning about routing in Next.js with the Pages Router and creating reusable components.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Button Component Demo</h2>
          <p className="text-gray-600 mb-6">
            Below are examples of our reusable Button component with different sizes and shapes:
          </p>
        </div>

        {/* Button Demonstrations */}
        <div className="space-y-8">
          {/* Different Sizes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Different Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                size="small" 
                onClick={() => handleClick('Small button clicked!')}
              >
                Small Button
              </Button>
              
              <Button 
                size="medium" 
                onClick={() => handleClick('Medium button clicked!')}
              >
                Medium Button
              </Button>
              
              <Button 
                size="large" 
                onClick={() => handleClick('Large button clicked!')}
              >
                Large Button
              </Button>
            </div>
          </div>

          {/* Different Shapes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Different Shapes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                shape="rounded-sm" 
                onClick={() => handleClick('Slightly rounded button clicked!')}
              >
                Slightly Rounded
              </Button>
              
              <Button 
                shape="rounded-md" 
                onClick={() => handleClick('Medium rounded button clicked!')}
              >
                Medium Rounded
              </Button>
              
              <Button 
                shape="rounded-full" 
                onClick={() => handleClick('Fully rounded button clicked!')}
              >
                Fully Rounded
              </Button>
            </div>
          </div>

          {/* Size and Shape Combinations */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Combinations</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                size="small" 
                shape="rounded-full"
                onClick={() => handleClick('Small pill button clicked!')}
              >
                Small Pill
              </Button>
              
              <Button 
                size="medium" 
                shape="rounded-sm"
                onClick={() => handleClick('Medium square button clicked!')}
              >
                Medium Square
              </Button>
              
              <Button 
                size="large" 
                shape="rounded-full"
                onClick={() => handleClick('Large pill button clicked!')}
              >
                Large Pill
              </Button>

              <Button 
                size="large" 
                shape="rounded-md"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => handleClick('Custom green button clicked!')}
              >
                Custom Style
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}