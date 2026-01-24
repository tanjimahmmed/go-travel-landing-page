import { createClient } from "@supabase/supabase-js";
import { Database } from "./Database";
import { BlogPost, Location } from "../utils/contentTypes";

const supabaseUrl = "https://dxdadufyxlrbyxwenigz.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export async function getBlogPosts() {
    const {data, error} = await supabase.from("BlogPosts").select();
    // throw new Error("some error occurred...")
    if(error){
        throw new Error(`ERROR: Database returned error when fetching blog posts: ${error.message}`)
    }
    const blogPosts: BlogPost[] = data.map(post => {
        return {
            id: post.id,
            img: post.img_url,
            alt: post.img_alt,
            date: post.date_created,
            title: post.article_title,
            summary: post.article_summary
        }
    })
    return blogPosts;
}


export async function getLocations() {
    const {data, error} = await supabase.from("Locations").select();
    if(error){
        throw new Error(`ERROR: Database returned error when fetching locations: ${error.message}`)
    }

    const locations: Location[] = data.map(location => {
        return {
            id: location.id,
            img: location.img_url,
            alt: location.img_alt,
            rating: location.rating,
            title: location.title,
            location: location.location,
            pricePerPerson: location.price_per_person
        }
    });
    return locations;
} 
