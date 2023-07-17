import ImprovingCyclingPerformance from "../blogPosts/ImprovingCyclingPerformance";
import NutritionForEnduranceAthletes from "../blogPosts/NutritionForEnduranceAthletes";
import Oravaman2023 from "../blogPosts/Oravaman2023";

type ArticleMetadata = {
  key: string;
  title: string;
  content: () => JSX.Element;
  date: Date;
  abstract: string
  bannerPhotoLink: string
  publicationLink?: string,
};

export const articles: ArticleMetadata[] = [
  {
    key: "oravaman-2023",
    title: "Oravaman 2023",
    content: Oravaman2023,
    date: new Date("2023-07-17"),
    abstract: `
    Oravaman is an extreme triathlon event taking place in the beautiful region of Orava in the northern
    part of Slovakia. Alltogether, an athlete must swim 2km in Liptovská Mara den, then cycle
    86km with more than 1800m of vertical ascent and finally hike to Brestová mountain (1903 mamsl).
    `,
    bannerPhotoLink: '/static/images/oravaman2023/run_with_mountains_cropped.jpg'
  },
  {
    key: "nutrition-for-endurance-athletes",
    title: "Nutrition for Endurance Athletes",
    content: NutritionForEnduranceAthletes,
    date: new Date("2023-06-30"),
    abstract: `Nutrition as the fourth discipline of triathlon is of paramount importance 
    for a successful and enjoyable race.
    This blogpost explains basics of nutrition, how to fuel before, during and after exercise,
    various fuel sources as well as some popular supplement usage
    `,
    publicationLink: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6628334/',
    bannerPhotoLink: '/static/images/nutrition-for-endurance-athletes.jpg'
  },
  {
    key: "improving-cycling-performance",
    title: "Improving Cycling Performance",
    content: ImprovingCyclingPerformance,
    date: new Date("2023-06-30"),
    abstract: `There are many ways to improve cycling performance, both in short and 
    long term. From changes in training, incorporation of altitude training, right
    nutrition strategies and timing, aerodynamics to weight management. This short article
    discusses these variables and ranks them in matters of time saved over time trial.
    `,
    publicationLink: 'https://link.springer.com/article/10.2165/00007256-200131070-00009',
    bannerPhotoLink: '/static/images/improving-cycling-performance.jpg'
  },
];