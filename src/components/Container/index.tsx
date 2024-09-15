export default function Container({children}:{children: React.ReactNode}) {
 return (
  <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-center items-center">
    {children}
   </main>
 );
}