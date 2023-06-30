import React from "react";
import ArticleBody, {
  ArticleSection,
  ArticleSubSection,
} from "../../components/ArticleSkeleton";

const NutritionForEnduranceAthletes = () => {
  return (
    <>
      <ArticleSection title="Fuel 101">
        <ArticleBody>
          Body produces most of its energy from 3 main sources, differing in
          chemical structure. Carbohydrates and fats are the main ones, while
          proteins are essential for structural integrity and functioning of
          human body.
        </ArticleBody>
        <ArticleSubSection title="Carbohydrates">
          <ArticleBody>
            Carbohydrates are the easiest form of fuel and are the fastest
            source of ATP of the three types. However, there are very limited
            stores of carbohydrates, only about 2000kCal which get depleted
            quite fast in an endurance event. Usually after 2 hours of moderate
            effort, an individual experiences a so called "bonk", when further
            racing is drastically hindered.
          </ArticleBody>
          <ArticleBody>
            Bad fueling during an endurance event can make the entire day harder
            than it should be, both in case of underfueling and overfueling.
            Everyones body is different as is the genetics and the environment
            we grew up in. Thus every one requires an individual strategy that
            is dependent on the experience of the athlete, racing conditions and
            race duration.
          </ArticleBody>
        </ArticleSubSection>
        <ArticleSubSection title="Fats">
          <ArticleBody>
            Mankind has long lived in the scarcity of food. Frequently many days
            without eating, the body adapted to this scenario and learned to
            store energy in a tissue with large energy density - Fat. In order
            to oxidise fat, more oxygen is required than when oxidising carbs,
            however the energy yield is much higher (9kCal/g, while both carbs
            and proteins the yield is just 4kCal).
          </ArticleBody>
          <ArticleBody>
            With so much food as we have today, great majority being processed,
            the body has not yet adapted to this shock and continues at what it
            does best - save as much unused exogenous fuel as fat for later use,
            resulting in global epidemic of obesity.
          </ArticleBody>
          <ArticleBody>
            Since the oxidation of fat requires more oxygen than oxidation of
            carbs, it is much harder to "burn" and get rid of it. The fat
            burning is furthermore hindered by recent ingestion of carbs so the
            ideal time to burn fat is during prolonged low intensity exerices
            after abstaining from carbs for at least 4 hours.
          </ArticleBody>
        </ArticleSubSection>
        <ArticleSubSection title="Proteins">
          <ArticleBody>
            Proteins are involved in almost everything functional in human body.
            From contraction, through beign metabolite carriers to being
            structural pillars of cells and much more, they are essential for
            right functioning of the metabolism.
          </ArticleBody>
          <ArticleBody>
            Proteins are simply aminoacid chains, where the length of this chain
            and the order of aminoacids determine protein structure and
            function. The body is able to synthetise most of aminoacids, except
            9 which have to be ingested in some form (a.k.a. essential amino
            acids - histidine, isoleucine, leucine, lysine, methionine,
            phenylalanine, threonine, tryptophan, and valine)
          </ArticleBody>
          <ArticleBody>
            Unless body is completely depleted of carbs it would not tap into
            its protein reserves. This state is called ketogenesis.
          </ArticleBody>
        </ArticleSubSection>
      </ArticleSection>
      <ArticleSection title="Exercise Fueling Recommendations">
        <ArticleSubSection title="Before">Before</ArticleSubSection>
        <ArticleSubSection title="During">During</ArticleSubSection>
        <ArticleSubSection title="After">After</ArticleSubSection>
      </ArticleSection>
      <ArticleSection title="Supplements">
        <ArticleSubSection title="Caffeine">Caffeine</ArticleSubSection>
        <ArticleSubSection title="Anti-oxidants">
          Anti-oxidants
        </ArticleSubSection>
      </ArticleSection>
    </>
  );
};

export default NutritionForEnduranceAthletes;
