import TaskCard from "@/components/task/TaskCard"
import TaskList from "@/components/task/TaskList"

const Home = () => {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 px-[84px] pb-9 pt-[121px]">
      <TaskList title="To do (3)">
        <TaskCard
          title="Testar Navegadores"
          description="Verificar e garantir a compatibilidade da
          aplicação em diferentes navegadores."
          date="25/12/2023"
          badgeType="high"
        />
        <TaskCard
          title="Atualizar Bibliotecas"
          description="Manter as libs atualizadas para garantir 
          segurança e aproveitar novos recursos"
          date="25/12/2023"
          badgeType="low"
        />
        <TaskCard
          title="Implementar Animações"
          description="Adicionar efeitos visuais e transições para melhorar a experiência do usuário."
          date="25/12/2023"
          badgeType="medium"
        />
      </TaskList>
      <TaskList title="Doing (1)">
        <TaskCard
          title="Atualizar Bibliotecas"
          description="Manter as libs atualizadas para garantir 
          segurança e aproveitar novos recursos"
          date="25/12/2023"
          badgeType="low"
        />
      </TaskList>
      <TaskList title="QA (1)">
        <TaskCard
          title="Atualizar Bibliotecas"
          description="Manter as libs atualizadas para garantir 
          segurança e aproveitar novos recursos"
          date="25/12/2023"
          badgeType="low"
        />
      </TaskList>
      <TaskList title="Done (1)">
        <TaskCard
          title="Final Project: App development"
          description="Business Web Development"
          date="25/12/2023"
          badgeType="finished"
        />
      </TaskList>
    </div>
  )
}

export default Home
