import { Card, CardBody, CardHeader, Link } from "@nextui-org/react"

export default function About() {
  return (
    <div className="container p-8 mx-auto">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl sm:text-2xl md:text-4xl">Hi! I am</h4>
            <h1 className="text-4xl sm:text-6xl md:text-8xl">
              {import.meta.env.VITE_APP_HERO}
            </h1>
            <h4 className="text-xl sm:text-2xl md:text-4xl">
              Senior Web Developer
            </h4>
          </div>

          <img
            className="h-[200px] rounded-full"
            src="/favicon.png"
            alt="Hero"
          />
        </div>

        <Card className="mt-8">
          <CardHeader className="text-xl font-bold">Profile:</CardHeader>
          <CardBody>
            This is {import.meta.env.VITE_APP_HERO}, a Senior Web Developer with
            9 years of experience, based in Baric, Serbia.
            <br />
            I am a product-minded entrepreneur and software engineer with over 9
            years of experience, specializing in front-end and back-end
            development.
            <br />
            I am seeking to leverage my professional expertise to provide
            high-quality services at any company and create an impact on
            customers.
            <br />
            <br />
            <div className="flex flex-col">
              <div className="flex gap-4">
                Linkedin:{" "}
                <Link
                  href="https://www.linkedin.com/in/aleksandar-aleksic-2136a9277/"
                  target="_blank"
                >
                  https://www.linkedin.com/in/aleksandar-aleksic-2136a9277/
                </Link>
              </div>
              <div className="flex gap-4">
                Github:{" "}
                <Link href="https://github.com/aleksandaralek" target="_blank">
                  https://github.com/aleksandaralek
                </Link>
              </div>
              <div className="flex gap-4">
                HackerRank:{" "}
                <Link
                  href="https://www.hackerrank.com/profile/aleksandardeveo1"
                  target="_blank"
                >
                  https://www.hackerrank.com/profile/aleksandardeveo1
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="mt-8">
          <CardHeader className="text-xl font-bold">Education:</CardHeader>
          <CardBody>
            <div className="flex flex-col gap-4">
              <div className="flex gap-8">
                <div className="whitespace-nowrap w-[120px]">
                  2010 - 2013
                  <br />
                  Belgrade, Serbia
                </div>

                <div>
                  <b>Bachelor's Degree in Computer Science</b>
                  <br />
                  University of Belgrade, Faculty of Information Technology
                </div>
              </div>

              <div className="flex gap-8">
                <div className="whitespace-nowrap w-[120px]">
                  2009 - 2010
                  <br />
                  Belgrade, Serbia
                </div>

                <div>
                  <b>Certificate in Web Development</b>
                  <br />
                  IT Academy
                </div>
              </div>

              <div className="flex gap-8">
                <div className="whitespace-nowrap w-[120px]">
                  2004 - 2008
                  <br />
                  Uzice, Serbia
                </div>

                <div>
                  <b>High School Diploma in Natural Sciences</b>
                  <br />
                  Užice Gymnasium
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="mt-8">
          <CardHeader className="text-xl font-bold">
            Work Experience:
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-4">
              <div className="flex gap-8">
                <div className="w-32 whitespace-nowrap">2021/4 - 2023/9</div>

                <div>
                  <ul>
                    <li className="text-lg font-bold">
                      Full-stack Web Developer
                    </li>
                    <li className="font-semibold text-md">
                      10 AK Digital LTD (via remote)
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      Developed new features for existing dating websites in
                      five countries (USA, Canada, Australia, UK, and Ireland).
                      Provided fixes for security and functional issues. Created
                      new dating platforms for other EU countries based on
                      existing ones.
                    </li>
                    <li>
                      Enhanced all aspects of customer experience for dating
                      websites, which led to a huge growth of income every
                      month. The rise was more than 600% since I took over the
                      project's development, resulting in more than 100,000$
                      monthly profit.
                    </li>
                    <li>
                      Scraped content, images, automatic chat messages from
                      websites that are global leaders in the dating industry.
                    </li>
                    <li>
                      Improved scalability of dating platforms to be able to
                      serve millions of users with the highest response rates
                      with "A" ratings on https://gtmetrix.com/. Introduced
                      various database optimizations, Redis caching tweaked
                      NGINX parameters, etc.
                    </li>
                    <li>
                      Defined multiple scripts and cron jobs responsible for
                      making daily and weekly backups of all dating platforms,
                      their databases, and file system (more than 1 TB), storing
                      it outside droplet in collaboration with third-party
                      backup providers.
                    </li>
                    <li>
                      Integrated RocketGate, PaysafeCard, and CCBill payment
                      providers for buying chat credits, using asynchronous
                      notification systems with webhooks and payout files.
                    </li>
                    <li>
                      Provided real-time support by fixing many bugs that
                      escalated as a product of various user behavior,
                      especially using the chat feature and payment system.
                    </li>
                    <li>
                      Connected websites with the Everflow marketing platform,
                      used for tracking sign-ups, account verification, and
                      purchase conversions through cookies. Integrated both
                      front-end and back-end cookie validation and complete
                      stats using Everflow API.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-32 whitespace-nowrap">2018/8 - 2021/2</div>

                <div>
                  <ul>
                    <li className="text-lg font-bold">
                      Full-stack Developer (Flutter and Laravel)
                    </li>
                    <li className="font-semibold text-md">
                      Praktice LLC (via remote)
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      Developed an app for online personal training, where
                      subscribed clients can see video workouts and exercises of
                      their favorite trainers. Responsible for Flutter
                      application, Laravel API, and Laravel MVC Admin Panel.
                    </li>
                    <li>
                      Refactored the whole code structure on both sides (Flutter
                      and Laravel API), to be reusable and adjusted with all
                      recommended design patterns (Flutter BLOC, REST API).
                    </li>
                    <li>
                      Fixed all design issues in Flutter, created new screens
                      and functionalities based on design provided in Adobe XD
                      file. Design of all pages adjusted to different screen
                      sizes and device pixel ratios.
                    </li>
                    <li>
                      Reimplemented API logic in Laravel including the social
                      login, subscriptions, search, feed, favorites, and
                      profile.
                    </li>
                    <li>
                      Added new functionalities to existing admin panel
                      including image and video upload, standard forms using
                      Laravel MVC pattern. The front end was implemented using
                      HTML, CSS, Bootstrap, JavaScript, and jQuery.
                    </li>
                    <li>
                      Localized all parts of the system (Arabic and English).
                      Flutter app localized with language JSON sheets, Laravel
                      API returned localized database columns based on HTTP
                      Accept-Language header.
                    </li>
                    <li>
                      Deployed Android and iOS Applications to Google Play Store
                      and App Store (Test Flight).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-32 whitespace-nowrap">2015/7 - 2018/6</div>

                <div>
                  <ul>
                    <li className="text-lg font-bold">Flutter Developer</li>
                    <li className="font-semibold text-md">
                      Eunotics, Inc. (via remote)
                    </li>
                    <li>
                      <br />
                    </li>
                    <li>
                      Developed a Flutter social app called Munch, which uses a
                      gesture-driven user interface that allows groups to decide
                      where they want to eat from.
                    </li>
                    <li>
                      Used Firebase as a support for social authentication
                      (Google, Facebook, Apple) and user management.
                    </li>
                    <li>
                      Implemented screens' design and functionalities to look
                      and behave exactly as in the pre-defined Invision
                      prototype provided by the designer.
                    </li>
                    <li>
                      Introduced a location feature to the app which allows
                      groups to have a unique experience based on the selected
                      location and radius distance on an interactive map with
                      in-built Google Places API search options.
                    </li>
                    <li>
                      Implemented a lot of animations on different screens,
                      which makes the gesture-driven interface more powerful and
                      user-friendly, causing the product to look more
                      professional.
                    </li>
                    <li>
                      Architected and developed a native deep-linking feature
                      for Android and iOS, which allows new users to easily join
                      the eating decision process. Also, there is a smart push
                      notification system that keeps the app's synchronization
                      in real-time.
                    </li>
                    <li>
                      Deployed the app's beta version on Android and iOS to
                      Google Play Store and App Store.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-32 whitespace-nowrap">2014/1 - 2015/6</div>

                <div>
                  <ul>
                    <li className="text-lg font-bold">
                      Web and Mobile Developer
                    </li>
                    <li className="font-semibold text-md">Freelance Work</li>
                    <li>
                      <br />
                    </li>
                    <li>
                      Developed a cross-platform (iOS, Android) social network
                      app in Flutter, Spring Boot REST API, and Laravel admin
                      panel. This was used by the Makeover Academy and its
                      students.
                    </li>
                    <li>
                      Implemented a generic CMS for eCommerce websites, which is
                      now successfully used by several companies in Serbia.
                    </li>
                    <li>
                      Created and tested a secure REST API for webshop sales
                      statistics and reports, invoices, authentication, and
                      more.
                    </li>
                    <li>
                      Built multiple webshops using MVC architecture, with the
                      integration of the aforementioned generic CMS and REST
                      API.
                    </li>
                    <li>
                      Developed the complete front end and back end of a website
                      that hosts recorded classes for many courses at the
                      University of Belgrade, School of Electrical Engineering,
                      which is extremely helpful to students for preparing and
                      passing exams.
                    </li>
                    <li>
                      Built the back end of a web application that connects
                      teachers with students and supports the booking process
                      for private lessons, authentication, and payment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
