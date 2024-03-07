import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import Skills from "@/components/skills/Skills";
import SearchForm from "@/components/search/SearchForm";
import Filters from "@/components/search/Filters";
import { getResources, getResourcesPlaylist } from '../lib/sanity'
import ResourceCard from "@/components/projects/ResourceCard";
import Header from "@/components/nav/Header";

export const revalidate = 100;

export default async function Home({ searchParams }) {

  const resources = await getResources({
    query: searchParams?.query || '',
   category: searchParams?.category || '',
    page: '1'
  })
  const resourcesPlaylist = await getResourcesPlaylist();
   
  //console.log(data)
  //console.log(resourcesPlaylist)

  return (
    <main className="flex justify-center items-center sm:p-5 xs:p-8 px-6 
     mx-auto w-full max-w-screen-2xl flex-col">
    <HeroSection/>

    <section className="pt-[48px] w-full">
        <div className="flex justify-center items-center
         relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r
          from-blue-500 via-yellow-400 to-indigo-400">Projects</h1>
        </div>
        <SearchForm />
      </section>

      <Filters className="" />
    {/* Search */}
    {/* 
      {
        (searchParams?.query || searchParams?.catagory) && (
         <section className="flex justify-center items-center mt-6 w-full flex-col sm:mt-20">
            <Header query = {searchParams?.query || ""}
            catagory = {searchParams?.catagory || ""} 
            />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource) => (
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
            ) : (
              <p className="text-[16px] font-normal leading-[20.8px]">
                No resources found
              </p>
            )
            }
         </div>     
         </section>
      )}

      */}
      <section className="grid grid-cols-1 sm:grid sm:grid-cols-3 sm:gap-5 mb-3">  
      {resourcesPlaylist.map((item) => (
        <section key={item._id} className="flex justify-center items-center mt-6 w-full flex-col sm:mt-4">
      {/*  <h1 className="heading3 self-start">{item.title}</h1> */}
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {item.resources.map((resource) => (
                <ResourceCard 
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                  projecturl= {resource.projecturl}
                />
              ))}
          </div>
        </section>
      ))}
      </section>
           
      <Skills/>
    </main>
  );
}
