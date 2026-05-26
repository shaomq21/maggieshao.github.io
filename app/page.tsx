import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-[17px] leading-7 text-neutral-900">

      {/* HERO */}

      <section className="grid md:grid-cols-[1.3fr_0.7fr] gap-14 items-start">

        <div>

          <h1 className="text-5xl font-semibold tracking-tight mb-8">
            Your Name | 中文名
          </h1>

          <div className="space-y-6">

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
              I am currently pursuing an M.S. in Machine Learning at
              Carnegie Mellon University, advised by
              Prof. Zackory Erickson at the Robotics Institute.
              I collaborate closely with Yuejing Liu and
              Prof. Chelsea Finn.
            </p>

            <p>
              Previously, I worked with Prof. Xin Yi at
              Tsinghua University and contributed to foundation models
              for large-scale time-series learning at Siemens Research.
            </p>

            <p>
              Email: yourname [at] cmu.edu
            </p>

            <div className="flex flex-wrap gap-3 text-[16px]">

              <a href="#" className="text-blue-600 hover:underline">
                Email
              </a>

              <span>|</span>

              <a href="#" className="text-blue-600 hover:underline">
                Google Scholar
              </a>

              <span>|</span>

              <a href="#" className="text-blue-600 hover:underline">
                GitHub
              </a>

              <span>|</span>

              <a href="#" className="text-blue-600 hover:underline">
                CV
              </a>

            </div>

          </div>

        </div>

        {/* PROFILE IMAGE */}

        <div className="w-full">

          <Image
            src="/profile.jpg"
            alt="profile"
            width={420}
            height={520}
            className="w-full object-cover rounded-sm"
          />

        </div>

      </section>

      {/* RESEARCH */}

      <section className="mt-40">

        <h2 className="text-3xl font-semibold mb-10">
          Research
        </h2>

        <div className="space-y-6">

          <p>
            My research interests include embodied AI,
            object-centric world models, vision-language-action policies,
            and scalable robot learning systems.
          </p>

          <p>
            I am particularly interested in building robotic systems
            that generalize across tasks, environments,
            spatial configurations, and robot embodiments.
          </p>

          <p>
            I welcome collaborations and discussions on robot learning,
            embodied intelligence, and scalable VLA systems.
          </p>

        </div>

      </section>

      {/* SELECTED RESEARCH */}

      <section className="mt-40">

        <h2 className="text-3xl font-semibold mb-14">
          Selected Research
        </h2>

        {/* PROJECT 1 */}

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 mb-24 items-start">

          <div>

            <Image
              src="/weco.png"
              alt="weco"
              width={500}
              height={300}
              className="rounded-sm border"
            />

          </div>

          <div>

            <h3 className="text-[24px] font-semibold leading-snug mb-3">

              Weco: Equivariant World Changes for
              Object-Centric Policy Learning

            </h3>

            <p className="mb-2">
              Your Name, Yuejing Liu, Chelsea Finn
            </p>

            <p className="text-red-600 mb-4">
              IROS 2026 Submission
            </p>

            <div className="flex gap-4 mb-5 text-[16px]">

              <a href="#" className="text-blue-600 hover:underline">
                website
              </a>

              <a href="#" className="text-blue-600 hover:underline">
                code
              </a>

              <a href="#" className="text-blue-600 hover:underline">
                paper
              </a>

              <a href="#" className="text-blue-600 hover:underline">
                video
              </a>

            </div>

            <div className="space-y-4 text-[16px] leading-7">

              <p>
                World-model-based planning with
                position-equivariant and geometry-invariant
                inverse dynamics models.
              </p>

              <p>
                Leveraging large-scale visual priors to
                enable robust manipulation generalization
                across environments and robot embodiments.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}