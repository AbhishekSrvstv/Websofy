import './Technologies.css';
import Reveal from './Reveal';
import {
  SiReact, SiNextdotjs, SiTypescript, SiAngular, SiVuedotjs,
  SiNodedotjs, SiLaravel, SiPhp, SiPython,
  SiMysql, SiMongodb, SiPostgresql, SiRedis, SiFirebase,
  SiDocker, SiGithub,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techData = [
  {
    number: '01',
    title: 'Frontend',
    desc: 'Modern interfaces and engaging user experiences.',
    items: [
      { icon: <SiReact />, name: 'React' },
      { icon: <SiNextdotjs />, name: 'Next.js' },
      { icon: <SiTypescript />, name: 'TypeScript' },
      { icon: <SiAngular />, name: 'Angular' },
      { icon: <SiVuedotjs />, name: 'Vue.js' },
    ],
  },
  {
    number: '02',
    title: 'Backend',
    desc: 'Secure and scalable application architecture.',
    items: [
      { icon: <SiNodedotjs />, name: 'Node.js' },
      { icon: <SiLaravel />, name: 'Laravel' },
      { icon: <SiPhp />, name: 'PHP' },
      { icon: <SiPython />, name: 'Python' },
    ],
  },
  {
    number: '03',
    title: 'Database',
    desc: 'Reliable data storage and management solutions.',
    items: [
      { icon: <SiMysql />, name: 'MySQL' },
      { icon: <SiMongodb />, name: 'MongoDB' },
      { icon: <SiPostgresql />, name: 'PostgreSQL' },
      { icon: <SiRedis />, name: 'Redis' },
      { icon: <SiFirebase />, name: 'Firebase' },
    ],
  },
  {
    number: '04',
    title: 'Deployment',
    desc: 'Reliable infrastructure for production applications.',
    items: [
      { icon: <FaAws />, name: 'AWS' },
      { icon: <SiDocker />, name: 'Docker' },
      { icon: <SiGithub />, name: 'GitHub' },
    ],
  },
];

function Technologies() {
  return (
    <section className="tech-section">
      <Reveal direction="up" className="tech-header">
        <span className="tech-tag">— Technology Used —</span>
        <h2>
          Technologies <span className="highlight">We Use</span>
        </h2>
        <p>
          We leverage modern technologies and proven development tools to
          create secure, scalable, and high-performance digital solutions.
        </p>
      </Reveal>

      <div className="tech-timeline">
        {techData.map((row, index) => (
          <Reveal direction="up" delay={index * 120} key={index}>
            <div className="tech-row">
              <div className="tech-left">
                <span className="tech-number">{row.number}</span>
                <h3>{row.title}</h3>
                <p>{row.desc}</p>
              </div>
              <div className="tech-right">
                {row.items.map((item, i) => (
                  <span className="tech-pill" key={i}>
                    {item.icon} {item.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Technologies;