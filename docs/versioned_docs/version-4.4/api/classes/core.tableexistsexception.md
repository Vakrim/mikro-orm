---
id: "core.tableexistsexception"
title: "Class: TableExistsException"
sidebar_label: "TableExistsException"
hide_title: true
---

# Class: TableExistsException

[core](../modules/core.md).TableExistsException

Exception for an already existing table referenced in a statement detected in the driver.

## Hierarchy

* [*DatabaseObjectExistsException*](core.databaseobjectexistsexception.md)

  ↳ **TableExistsException**

## Constructors

### constructor

\+ **new TableExistsException**(`previous`: Error): [*TableExistsException*](core.tableexistsexception.md)

#### Parameters:

Name | Type |
------ | ------ |
`previous` | Error |

**Returns:** [*TableExistsException*](core.tableexistsexception.md)

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md)

Defined in: [packages/core/src/exceptions.ts:10](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L10)

## Properties

### code

• `Optional` **code**: *undefined* \| *string*

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md).[code](core.databaseobjectexistsexception.md#code)

Defined in: [packages/core/src/exceptions.ts:6](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L6)

___

### errmsg

• `Optional` **errmsg**: *undefined* \| *string*

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md).[errmsg](core.databaseobjectexistsexception.md#errmsg)

Defined in: [packages/core/src/exceptions.ts:10](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L10)

___

### errno

• `Optional` **errno**: *undefined* \| *number*

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md).[errno](core.databaseobjectexistsexception.md#errno)

Defined in: [packages/core/src/exceptions.ts:7](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L7)

___

### message

• **message**: *string*

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md).[message](core.databaseobjectexistsexception.md#message)

Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md).[name](core.databaseobjectexistsexception.md#name)

Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: *undefined* \| (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md).[prepareStackTrace](core.databaseobjectexistsexception.md#preparestacktrace)

Defined in: node_modules/@types/node/globals.d.ts:11

___

### sqlMessage

• `Optional` **sqlMessage**: *undefined* \| *string*

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md).[sqlMessage](core.databaseobjectexistsexception.md#sqlmessage)

Defined in: [packages/core/src/exceptions.ts:9](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L9)

___

### sqlState

• `Optional` **sqlState**: *undefined* \| *string*

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md).[sqlState](core.databaseobjectexistsexception.md#sqlstate)

Defined in: [packages/core/src/exceptions.ts:8](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L8)

___

### stack

• `Optional` **stack**: *undefined* \| *string*

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md).[stack](core.databaseobjectexistsexception.md#stack)

Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md).[stackTraceLimit](core.databaseobjectexistsexception.md#stacktracelimit)

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
------ | ------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Inherited from: [DatabaseObjectExistsException](core.databaseobjectexistsexception.md)

Defined in: node_modules/@types/node/globals.d.ts:4
