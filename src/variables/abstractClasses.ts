import type { JSONTextComponent } from 'src/arguments/jsonTextComponent'

export class ComponentClass {
  protected _toChatComponent(): JSONTextComponent {
    throw new Error('Not implemented')
  }
}

export class ConditionClass {
  /**
   * @internal
   */
  _toMinecraftCondition(): {value: any[]} {
    throw new Error('Not implemented')
  }
}

export class ConditionTextComponentClass extends ComponentClass implements ConditionClass {
  _toMinecraftCondition(): {value: any[]} {
    throw new Error('Not implemented')
  }
}
