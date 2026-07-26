//I don't believe software is built by writing code.
//I believe it is built by understanding problems first.
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <section className="about__block">
        <h3>How it started</h3>
        <p>
          Before becoming a software developer, I spent years solving
          operational problems where every decision had immediate consequences.
          Working in customer service and logistics taught me to look beyond the
          first solution, evaluate different paths, and take ownership of the
          decisions I made. During night shifts, guidance was rarely available.
          Most situations had to be analyzed and resolved independently, which
          strengthened my ability to remain calm under pressure, think
          critically, and explore every reasonable alternative before escalating
          a problem. Those experiences shaped the way I approach every problem
          today, even though the problems themselves are now different.
        </p>
      </section>

      <section className="about__block">
        <h3>Building on solid foundations</h3>
        <p>
          Good software starts long before the first line of code. Over time, I
          realized that strong solutions rarely begin with implementation. They
          begin with understanding the problem, documenting ideas, organizing
          information, and designing a clear direction before building. Today,
          every project I develop follows that same mindset. I believe
          thoughtful preparation creates stronger foundations, making software
          easier to maintain, easier to understand, and ready to evolve as new
          challenges appear. Building becomes much easier when the thinking
          behind it is already clear.
        </p>
      </section>

      <section className="about__block">
        <h3>From process to software</h3>
        <p>
          My transition into software development wasn't a departure from what I
          enjoyed doing—it was a continuation of it. I realized I wasn't
          changing what I enjoyed solving. I was changing the medium through
          which I could solve it. Software gave me the opportunity to transform
          ideas into lasting solutions, improve processes at a larger scale, and
          build systems that continue creating value long after they are
          delivered. Looking back, I don't see two different careers. I see the
          same mindset evolving through a different set of tools.
        </p>
      </section>

      <section className="about__block">
        <h3>Always looking for another path</h3>
        <p>
          The first solution is rarely the only one. What motivates me most is
          exploring different approaches until I find one that is clear,
          sustainable, and purposeful. I enjoy challenging assumptions,
          discussing ideas with others, and understanding why one solution
          creates more value than another. For me, software development is not
          simply about writing code. It is about continuously searching for
          better ways to solve problems, improve existing systems, and help
          ideas evolve into reliable solutions. That search for better solutions
          is what continues to motivate me every time I begin a new project.
        </p>
      </section>
    </section>
  );
}
