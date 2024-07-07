import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Game } from "../../pages/types";
import {motion} from 'framer-motion';

function ListOfGames({defaultGames}) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {defaultGames.map((game:Game, index: number) => 
    //   <motion.div>
 <Card key={index} className="cursor-pointer">
        <CardHeader className="text-center">
            <CardTitle className="font-[800]">{game.title}</CardTitle>
            <CardDescription>{game.description}</CardDescription>
        </CardHeader>
        <CardContent className="px-0 py-0">
            <img src={game.imageSrc} className="rounded-xl"/>
        </CardContent>
      </Card>
    //   </>

    )} 
    </div>
  );
}

export default ListOfGames;
