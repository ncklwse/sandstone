import { ResourceInstance } from './Resource'

import type { MultiplePlayersArgument, RecipeJSON } from '@arguments'
import type { Datapack } from '@datapack'

export class RecipeInstance<P1 extends string = string, P2 extends string = string, P3 extends string = string> extends ResourceInstance {
  recipeJson

  constructor(datapack: Datapack, name: string, recipe: RecipeJSON<P1, P2, P3>) {
    super(datapack, name)

    this.recipeJson = recipe

    this.datapack.addResource(name, 'recipes', { recipe })
  }

  /** Give this recipe to the given players. */
  give = (targets: MultiplePlayersArgument) => {
    this.datapack.commandsRoot.recipe.give(targets, this.name)
  }

  /** Take this recipe from the given players. */
  take = (targets: MultiplePlayersArgument) => {
    this.datapack.commandsRoot.recipe.take(targets, this.name)
  }
}
