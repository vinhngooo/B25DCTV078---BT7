const skills = [
  { id: 1, name: "HTML/CSS", level: "Yếu" },
  { id: 2, name: "JavaScript", level: "Yếu" },
  { id: 3, name: "React", level: "Yếu" },
];

const projects = [
  { id: 1, name: "Trang CV cá nhân (HTML/CSS)", description: "Trang giới thiệu bản thân làm ở Buổi 2 - 3.", tech: "HTML, CSS" },
  { id: 2, name: "Virtual Calculator", description: "Máy tính cơ bản viết bằng React.", tech: "React" },
];

function Header({ name, title, email, phone }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p className="title">{title}</p>
      <p>Email: {email} | SĐT: {phone}</p>
    </header>
  );
}

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function SkillList({ skills }) {
  return (
    <ul>
      {skills.map((s) => (
        <li key={s.id}>{s.name} - {s.level}</li>
      ))}
    </ul>
  );
}

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((p) => (
        <div className="project" key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p><i>Công nghệ: {p.tech}</i></p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return <footer className="footer">CV cá nhân làm bằng React</footer>;
}

export default function App() {
  return (
    <div className="cv">
      <Header name="Ngô Quang Vinh" title="Sinh viên AIoT" email="ngovinhyb@gmail.com" phone="0357 666 270" />
      <Section title="Giới thiệu">
        <p>Sinh viên năm hai, đang học lập trình web và mong muốn qua môn.</p>
      </Section>
      <Section title="Kỹ năng">
        <SkillList skills={skills} />
      </Section>
      <Section title="Dự án">
        <ProjectList projects={projects} />
      </Section>
      <Section title="Học vấn">
        <p>Học viện Công nghệ Bưu chính Viễn thông (PTIT)</p>
      </Section>
      <Footer />
    </div>
  );
}
