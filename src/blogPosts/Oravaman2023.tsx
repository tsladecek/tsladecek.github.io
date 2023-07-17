import React from "react";
import ArticleBody, {
  ArticleImg,
  ArticleSection,
  ArticleSubSection,
} from "../components/ArticleSkeleton";

const Oravaman2023 = () => {
  return (
    <>
      <ArticleSection title="Pre-race">
        <ArticleBody>
          My first half distance triathlon. I dont think I could have chosen a
          better event. The organisation, surrounding nature and the overal
          atmosphere was just top notch.
        </ArticleBody>
        <ArticleBody>
          I arrived with my girlfriend on friday around lunch time. We had a
          short stop to eat lunch (rice with chicken breasts) and then headed to
          T1 at Liptovská Sielnica. After last couple checks and quick chain
          clean and lubrication, I registered the bike in the transition area.
          After that we headed to Pension Pribisko, while carefully observing
          part of the course as we drove through the Huty mountain pass.
        </ArticleBody>
        <ArticleBody>
          I am a weak cyclist with very little hill training. Here in
          Bratislava, one has to be really creative when he wants to exercise
          hill ascents and descends. Therefore, I got a little scared/motivated
          for saturdays ride. I knew it was going to be tough, but after seeing
          part of course I appreciated it much more.
        </ArticleBody>
        <ArticleBody>
          After arriving to pension Pribisko, I registered and received racing
          chip and number with bunch of other promo items.
        </ArticleBody>
      </ArticleSection>
      <ArticleSubSection title="Race morning">
        <ArticleBody>
          I woke up at 4:45am and had two bagels with peanut butter and banana
          for breakfast. I was considering having a coffee or a redbull, but
          decided for neither as I did not want to risk any GI issues. Then I
          headed to Pension Pribisko, where we got on to buses which took us all
          the way to T1 at Liptovská Mara den. I loaded two 950ml bottles filled
          with 120g of never2 sports drink on the bike and prepared my helmet
          and cycling shoes with another 4 never2 gels (2 caffeinated + 2
          normal). Alltogether, the plan was to drink ~ 1/2 - 1/3 of a bottle
          every hour and take 1 gel with the beginning of each hour, roughly
          accounting to carb intake of 90g per hour. Finally I put on my neopren
          suit and swimming cap and went for a warm up swim.
        </ArticleBody>
      </ArticleSubSection>
      <ArticleSection title="Race (7:35:05)">
        <ArticleSubSection title="Swim (37:40)">
          <ArticleImg src="/static/images/oravaman2023/swim.png" alt="swim" />
          <ArticleBody>
            The swim consisted of two 1km laps in the Liptovská Mara den. The
            water temperature was ok, however some athletes decided to swim
            without neoprene suit. The race started at 8am.
          </ArticleBody>
        </ArticleSubSection>
        <ArticleSubSection title="Bike (3:43:44)">
          <ArticleImg src="/static/images/oravaman2023/bike.png" alt="bike" />
          <ArticleBody>
            The bike course starts at T1 and then continues through Huty pass
            all the way to Oravice. Then this is repeated but in the opposite
            direction. Finally, after third and last pass of Huty the bike
            course ends at Pension Pribisko.
          </ArticleBody>
          <ArticleBody>
            <em>Notes to my future self: </em>
            <ol>
              <li>
                On a hot day like this, 2 litres of fluid is not enough. Either
                ride faster or take another ~200 ml of water
              </li>
              <li>
                Deep section wheels are not ideal (duh). On top of the mountain
                the wind can be quite strong which could result in loss of
                control over the bike
              </li>
              <li>
                Train more on the hills and the descends. Make sure that you are
                able to maintain high cadence even on steep hills
              </li>
            </ol>
            Otherwise, the nutrition plan was good. I had no stomach issues and
            my energy levels were stable
          </ArticleBody>
        </ArticleSubSection>
        <ArticleSubSection title="Run (3:07:29)">
          <ArticleImg src="/static/images/oravaman2023/run.png" alt="run" />
          <ArticleBody>
            The "run" course consists of an ascent to Brestová, with ~ 1300m
            climbed. Then there is a hard descend ski resort Zverovka, after
            which it is mainly a normal trail run. During the first 5k of the
            run, I drank all of my 1L of never2 sports drink (60g of carbs) and
            had one gel, thinking that I would be able to refill my flasks with
            water at the 5KM mark, which also served as a check point. When I
            got there, I was told that there would be some refreshment at the
            summit of Brestová, which was cca. 20 min away. Ok, not good not bad
            I continued the course. When I reached the summit and asked for
            water, I was told that there would be refreshment station in the
            valley, however the guy offered me some coca-cola, which was nice
            but at that point my palate was so sweet, but I was grateful for
            anything. The couple sips definitely helped. When I got to the
            valley, there was a small station where they finally had some water,
            however they served it in bottles. I took a couple of sips, and the
            (too politely) did not even ask if I could refill my flasks with the
            water, as it looked like there was a limited amount of it and I knew
            that there were many athletes behind me. My thirst got quenched for
            only a couple minutes before I desired water again. Not knowing
            where exactly I was, I realised that there was a small stream right
            next to me, so I refilled one flask with the water and washed my
            face with it and continued. Of course, couple of minutes later there
            was large refreshment station where I refilled my flask again and
            continued. Altogether I ingested 5 never2 gels during the run, one
            which containing caffeine.
          </ArticleBody>
          <ArticleBody>
            <em>Notes to my future self: </em>
            <ol>
              <li>
                Again, On a hot day like this, 1 litre of fluid is not enough.
                Take at least 2L.
              </li>
            </ol>
          </ArticleBody>
          <ArticleImg src="/static/images/oravaman2023/finish.jpg" alt="run" />
        </ArticleSubSection>
        <ArticleBody>
          The course is beautiful, especially the first part where one is
          rewarded with beautiful views of surrounding mountains. If not for the
          challenge itself, I would recommend to try this event for the views
          alone :)
        </ArticleBody>
      </ArticleSection>
    </>
  );
};

export default Oravaman2023;
