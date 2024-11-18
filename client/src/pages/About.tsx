import PageTab from "../components/PageTab";
import "../css/about.css";

const About = () => {
  return (
    <div>
      <PageTab title="About Us">
        <div className="about-title">
            <h1>Meet the developers</h1>
            <h3>Creators of the Madness</h3>
        </div>
        <div className="bio">
          <div className="bio-container">
            <h1 className="developerName">Justin Hebenstreit</h1>
            <div className="bioDescription">
              <p>
                Justin is an aspiring web developer making an exciting career
                transition into the tech industry. With a strong passion for
                gaming and a deep curiosity for understanding the complexities
                of technology, he enrolled in a web development boot camp to
                expand his skills and expertise in IT.
              </p>

              <p>
                Before pursuing web development, Justin completed the full Cisco
                track at Ranken Technical College, earning an Associate of
                Technology degree in Information Technology with a focus on
                Cisco Networking and Network Security. He completed his studies
                just a few months before the start of the COVID-19 pandemic.
              </p>

              <p>
                This website is the culmination of a collaborative effort
                between Justin and three of his peers, created as a capstone
                project for the boot camp. It showcases their combined technical
                abilities and serves as a foundation for their professional
                portfolios.
              </p>
            </div>
          </div>

          <div className="bio-container">
            <h1 className="developerName">Bryce Berczik</h1>

            <div className="bioDescription">
              <p>
                Bryce Berczik is a versatile software engineer with one year of
                experience in full-stack development, specializing in front-end
                design and delivering user-centered solutions. Skilled in
                JavaScript, TypeScript, Python, and modern frameworks like
                React, he focuses on creating seamless, intuitive interfaces
                that meet both user needs and business goals. His passion lies
                in transforming complex requirements into functional, visually
                appealing products that enhance engagement and satisfaction.
              </p>

              <p>
                With a proven ability to solve problems by combining creativity
                with technical expertise, Bryce develops scalable, robust web
                applications. His strength lies in crafting responsive,
                accessible interfaces that adhere to modern design principles,
                blending functionality with aesthetics. Comfortable with both
                front-end and back-end development, he ensures smooth
                integration between client-facing components and backend
                systems, fostering effective collaboration across the stack.
              </p>

              <p>
                In addition to his technical skills, Bryce thrives in agile
                environments, adapting to evolving requirements and consistently
                delivering results on time. His expertise includes HTML, CSS,
                JavaScript, TypeScript, and Python, with ongoing efforts to
                expand his proficiency in MongoDB, PostgreSQL, and GraphQL.
                Committed to clean, maintainable code and user-focused designs,
                Bryce tackles real-world challenges through innovative software
                solutions, bringing enthusiasm and adaptability to every
                project.
              </p>
            </div>
          </div>

          <div className="bio-container">
            <h1 className="developerName">Jarvis Young</h1>

            <div className="bioDescription">
              <p>temp</p>

              <p>temp</p>

              <p>temp</p>
            </div>
          </div>

          <div className="bio-container">
            <h1 className="developerName">Zander Kubajak</h1>

            <div className="bioDescription">
              <p>temp</p>

              <p>temp</p>

              <p>temp</p>
            </div>
          </div>
        </div>
      </PageTab>
    </div>
  );
};

export default About;
