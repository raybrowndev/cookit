
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer";
import { Heading1, Heading2 } from "@/components/Heading";
import NavBar from "@components/NavBar";



export default function Home() {

  return (
    <>
    <NavBar />
    
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    {/* Main Container */}
    <main className="items-center sm:items-start text-center">

      <div className="px-12 py-6 space-y-8"> 
        <Heading1>This is a heading</Heading1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, accusamus nemo. Praesentium repellat aliquam nostrum nihil, a molestiae, dolores quo labore tenetur, magni eaque commodi voluptatibus perspiciatis quod. Dignissimos, quisquam.</p>
        <Button>Click Here</Button>
        <Heading2>This is an H2</Heading2>
      </div>

    </main>


      
    </div>
    <Footer />
    </>
  );
}
