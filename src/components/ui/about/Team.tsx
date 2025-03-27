import {
  Section,
  TeamGrid,
  TeamMember,
  MemberImage,
  MemberName,
} from "./About.styles";

const teamData = [
  { name: "John Doe", role: "CEO", img: "/assets/images/team/John.jpeg" },
  {
    name: "Jane Smith",
    role: "Head Designer",
    img: "/assets/images/team/Jane.jpeg",
  },
  {
    name: "Mark Wilson",
    role: "Marketing Lead",
    img: "/assets/images/team/Mark.jpeg",
  },
];

const Team = () => {
  return (
    <Section>
      <TeamGrid>
        {teamData.map((member) => (
          <TeamMember key={member.name}>
            <MemberImage src={member.img} alt={member.name} />
            <MemberName>
              {member.name} - {member.role}
            </MemberName>
          </TeamMember>
        ))}
      </TeamGrid>
    </Section>
  );
};

export default Team;
