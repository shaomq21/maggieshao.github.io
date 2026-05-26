export default function Home() {
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-10">

      {/* HERO */}

      <section className="grid md:grid-cols-3 gap-10 items-start">

        {/* LEFT */}

        <div className="md:col-span-2">

          <h1 className="text-5xl font-semibold mb-8">
            Maggie Shao | 邵XX
          </h1>

          <div className="text-[22px] leading-relaxed space-y-6">

            <p>
              I am a robotics and machine learning researcher working on
              embodied AI and generalizable robot learning.
            </p>

            <p>
              My research focuses on object-centric world models,
              vision-language-action policies, and scalable robot learning
              systems that generalize across tasks, environments,
              and robot embodiments.
            </p>

            <p>
              I am currently pursuing an M.S. in Machine Learning
              at Carnegie Mellon University, advised by
              Prof. Zackory Erickson at the Robotics Institute.
              I collaborate closely with Yuejing Liu and
              Prof. Chelsea Finn on scalable robot learning systems.
            </p>

            <p>
              Previously, I worked with Prof. Xin Yi at
              Tsinghua University and contributed to foundation models
              for large-scale time-series learning at Siemens Research.
            </p>

            <p>
              Email: yourname [at] cmu.edu
            </p>

            {/* LINKS */}

            <div className="flex flex-wrap gap-4 text-[20px]">

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                Email
              </a>

              <span>|</span>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                Google Scholar
              </a>

              <span>|</span>

              <a
                href="https://github.com/shaomq21"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>

              <span>|</span>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>

              <span>|</span>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                CV
              </a>

            </div>

          </div>

        </div>

        {/* PROFILE IMAGE */}

        <div>

          <img
            src="/profile.jpg"
            alt="profile"
            className="w-full rounded-sm object-cover"
          />

        </div>

      </section>

      {/* RESEARCH */}

      <section className="mt-32">

        <h2 className="text-4xl font-semibold mb-10">
          Research
        </h2>

        <div className="text-[22px] leading-relaxed space-y-6">

          <p>
            My research interests include:
          </p>

          <ul className="list-disc ml-8 space-y-2">

            <li>Embodied AI</li>

            <li>Generalizable Robot Learning</li>

            <li>Object-Centric World Models</li>

            <li>Vision-Language-Action Models</li>

            <li>Equivariant Representation Learning</li>

            <li>Sim2Real Transfer</li>

            <li>Cross-Embodiment Generalization</li>

          </ul>

          <p>
            I welcome collaborations and discussions on robotics,
            embodied intelligence, and scalable VLA systems.
          </p>

        </div>

      </section>

      {/* SELECTED RESEARCH */}

      <section className="mt-32">

        <h2 className="text-4xl font-semibold mb-14">
          Selected Research
        </h2>

        {/* WECO */}

        <div className="grid md:grid-cols-3 gap-10 mb-24">

          <div>

            <img
              src="/weco.png"
              alt="weco"
              className="rounded-md border"
            />

          </div>

          <div className="md:col-span-2">

            <h3 className="text-3xl font-semibold mb-3">
              Weco: Equivariant World Changes for
              Object-Centric Policy Learning
            </h3>

            <p className="text-xl mb-4">
              Maggie Shao, Yuejing Liu, Chelsea Finn
            </p>

            <p className="text-red-600 text-xl mb-5">
              IROS 2026 Submission
            </p>

            <div className="flex gap-4 text-xl mb-6">

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                website
              </a>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                code
              </a>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                paper
              </a>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                video
              </a>

            </div>

            <div className="text-[21px] leading-relaxed space-y-4">

              <p>
                World-model-based planning with
                position-equivariant and geometry-invariant
                inverse dynamics models.
              </p>

              <p>
                Leveraging large-scale 2D visual priors to enable
                generalization across manipulation skills,
                objects, backgrounds, spatial configurations,
                and robot embodiments.
              </p>

            </div>

          </div>

        </div>

        {/* ABSVLA */}

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <img
              src="/absvla.png"
              alt="absvla"
              className="rounded-md border"
            />

          </div>

          <div className="md:col-span-2">

            <h3 className="text-3xl font-semibold mb-3">
              AbsVLA: Robust Vision-Language-Action Policies
              via Object-Centric Abstraction
            </h3>

            <p className="text-xl mb-4">
              Maggie Shao, Zackory Erickson
            </p>

            <p className="text-red-600 text-xl mb-5">
              IROS Submission
            </p>

            <div className="flex gap-4 text-xl mb-6">

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                website
              </a>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                code
              </a>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                paper
              </a>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                video
              </a>

            </div>

            <div className="text-[21px] leading-relaxed space-y-4">

              <p>
                Object-centric abstract state representations
                for robust vision-language-action policies
                under visual and language distribution shifts.
              </p>

              <p>
                Achieved stronger robustness on LIBERO benchmarks
                and demonstrated zero-shot sim-to-real transfer
                from Franka Panda simulation to Hello Robot Stretch.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}

      <section className="mt-32 mb-32">

        <h2 className="text-4xl font-semibold mb-12">
          Experience
        </h2>

        <div className="space-y-10 text-[22px] leading-relaxed">

          <div>

            <h3 className="text-2xl font-semibold">
              Siemens Research — Deep Learning Group
            </h3>

            <p className="text-gray-600">
              Munich & Beijing | 2024.11 - 2025.1
            </p>

            <p className="mt-4">
              Contributed to the development of General Time
              Transformer (GTT), an encoder-only foundation model
              for zero-shot multivariate time-series forecasting
              trained on 2.9TB industrial data.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold">
              Carnegie Mellon University
            </h3>

            <p className="text-gray-600">
              M.S. in Machine Learning (Robotics Focus)
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold">
              Tsinghua University
            </h3>

            <p className="text-gray-600">
              Mathematics · Physics · Industrial Engineering
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}