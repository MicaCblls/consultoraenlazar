import WeAre from "@/components/home/WeAre";
import { Layout } from "@/components/Layout";
import { loadTeam } from "@/lib/loadTeamMembers";

const Team = ({ team }) => {
  return (
    <>
      <Layout
        title={"Equipo"}
        content={"Equipo de trabajo de Consultora Enlazar"}
      >
      <WeAre team={team}/>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  try {
    const team = await loadTeam()
    team.sort(() => Math.random() - 0.5)
    return {
      props: {
        team
      }
    }
  } catch (error) {
    return {
      props: {
        team: null
      }
    }
  }
}

export default Team;
