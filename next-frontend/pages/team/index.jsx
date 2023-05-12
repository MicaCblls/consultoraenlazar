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
        <WeAre team={team} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  try {
    const team = await loadTeam();
    return {
      props: {
        team,
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        team: null,
      },
    };
  }
}

export default Team;
