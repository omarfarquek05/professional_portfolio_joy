import HeroSection from "@/components/hero/HeroSection";
import Skills from "@/components/skills/Skills";
import SearchForm from "@/components/search/SearchForm";
import Filters from "@/components/search/Filters";
import { getResources,getHeroSection } from '../lib/sanity'
import ResourceCard from "@/components/projects/ResourceCard";
import Contact from "@/components/contact/Contact";

export const revalidate = 100;

export default async function Home({ searchParams }) {

  const resources = await getResources({
    query: searchParams?.query || '',
   category: searchParams?.category || '',
    page: '1'
  })

  const heroData = await getHeroSection();

  return (
    <main className="flex justify-center items-center sm:p-5 xs:p-8 px-6 
     mx-auto w-full max-w-screen-2xl flex-col">
   
     {heroData.map((heroo)=> (
      <HeroSection 
      author = {heroo.author}
      title = {heroo.title}
      authorImage = {heroo.authorImage}
      content = {heroo.content}
    cvDownloadLink = {heroo.cvDownloadLink} />
     ))}
     

    <section className="pt-[48px] w-full">
        <div className="flex justify-center items-center
         relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r
          from-blue-500 via-yellow-400 to-indigo-400">Projects</h1>
        </div>
        <SearchForm />
      </section>

      <Filters />
    {/* Search */}
    <section className="flex justify-center items-center mt-1 w-full flex-col sm:mt-1 mb-4">

    <div className="mt-3 flex w-full flex-wrap justify-center gap-5 sm:grid sm:grid-cols-3 ">
      {resources.map((resource)=> (
        <ResourceCard
        key={resource._id}
        title={resource.title}
        id={resource._id}
        image={resource.image}
        downloadNumber={resource.views}
        downloadLink={resource.downloadLink}
        projecturl= {resource.projecturl}
        />
      ))

      }
    </div>
    </section>
           
      <Skills/>
      <Contact/>
    </main>
  );
}
