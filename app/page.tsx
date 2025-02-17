
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer";
import { Heading1, Heading2 } from "@/components/Heading";
import NavBar from "@components/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";



export default function Home() {

  return (
    <>
    <NavBar />
    
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    {/* Main Container */}
    <main className="items-center sm:items-start text-center">

      <div className="space-y-8"> 
        <div className="cuisine">
          <Button variant="cuisine">Italian</Button>
          <Button variant="cuisine">Mexican</Button>
          <Button variant="cuisine">Japanese</Button>
          <Button variant="cuisine">Indian</Button>
          <Button variant="cuisine">Thai</Button>
          <Button variant="cuisine">French</Button>
          <Button variant="cuisine">Chinese</Button>
          <Button variant="cuisine">Greek</Button>
          <Button variant="cuisine">Lebanese</Button>
        </div>

        <Heading1>Cookit Recipe Finder</Heading1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, accusamus nemo. Praesentium repellat aliquam nostrum nihil, a molestiae, dolores quo labore tenetur, magni eaque commodi voluptatibus perspiciatis quod. Dignissimos, quisquam.</p>
        
        <Card>  
          <CardHeader>
            <CardTitle>Roast Chicken</CardTitle>
          </CardHeader>
          <CardContent>
          <Image 
              src="/user1.png"
              alt="Delicious cuisine" 
              width={250} 
              height={100} 
              className="rounded-lg shadow-lg mx-auto"
            />
            <p>Cooking time: 20 mins</p>
          </CardContent>
        </Card>

      </div>
    </main>
    </div>
    {/* <Footer /> */}
    </>
  );
}
