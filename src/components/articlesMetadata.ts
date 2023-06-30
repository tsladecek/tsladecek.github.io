import ImprovingCyclingPerformance from "../blogPosts/improvingCyclingPerformance/ImprovingCyclingPerformance";
import NutritionForEnduranceAthletes from "../blogPosts/nutritionForEnduranceAthlete/NutritionForEnduranceAthletes";

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
    key: "nutrition-for-endurance-athletes",
    title: "Nutrition for Endurance Athletes",
    content: NutritionForEnduranceAthletes,
    date: new Date("2023-06-30"),
    abstract: `Nutrition as the fourth discipline of triathlon is of paramount importance 
    for a successful and enjoyable race.
    This blogpost explains basics of nutrition, how to fuel before, during and after exercise,
    various fuel sources as well as some famous supplement usage
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