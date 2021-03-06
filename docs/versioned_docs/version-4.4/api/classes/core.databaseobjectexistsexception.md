---
id: "core.databaseobjectexistsexception"
title: "Class: DatabaseObjectExistsException"
sidebar_label: "DatabaseObjectExistsException"
hide_title: true
---

# Class: DatabaseObjectExistsException

[core](../modules/core.md).DatabaseObjectExistsException

Base class for all already existing database object related errors detected in the driver.

A database object is considered any asset that can be created in a database
such as schemas, tables, views, sequences, triggers,  constraints, indexes,
functions, stored procedures etc.

## Hierarchy

* [*ServerException*](core.serverexception.md)

  ↳ **DatabaseObjectExistsException**

  ↳↳ [*TableExistsException*](core.tableexistsexception.md)

## Constructors

### constructor

\+ **new DatabaseObjectExistsException**(`previous`: Error): [*DatabaseObjectExistsException*](core.databaseobjectexistsexception.md)

#### Parameters:

Name | Type |
------ | ------ |
`previous` | Error |

**Returns:** [*DatabaseObjectExistsException*](core.databaseobjectexistsexception.md)

Inherited from: [ServerException](core.serverexception.md)

Defined in: [packages/core/src/exceptions.ts:10](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L10)

## Properties

### code

• `Optional` **code**: *undefined* \| *string*

Inherited from: [ServerException](core.serverexception.md).[code](core.serverexception.md#code)

Defined in: [packages/core/src/exceptions.ts:6](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L6)

___

### errmsg

• `Optional` **errmsg**: *undefined* \| *string*

Inherited from: [ServerException](core.serverexception.md).[errmsg](core.serverexception.md#errmsg)

Defined in: [packages/core/src/exceptions.ts:10](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L10)

___

### errno

• `Optional` **errno**: *undefined* \| *number*

Inherited from: [ServerException](core.serverexception.md).[errno](core.serverexception.md#errno)

Defined in: [packages/core/src/exceptions.ts:7](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L7)

___

### message

• **message**: *string*

Inherited from: [ServerException](core.serverexception.md).[message](core.serverexception.md#message)

Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: [ServerException](core.serverexception.md).[name](core.serverexception.md#name)

Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: *undefined* \| (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Inherited from: [ServerException](core.serverexception.md).[prepareStackTrace](core.serverexception.md#preparestacktrace)

Defined in: node_modules/@types/node/globals.d.ts:11

___

### sqlMessage

• `Optional` **sqlMessage**: *undefined* \| *string*

Inherited from: [ServerException](core.serverexception.md).[sqlMessage](core.serverexception.md#sqlmessage)

Defined in: [packages/core/src/exceptions.ts:9](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L9)

___

### sqlState

• `Optional` **sqlState**: *undefined* \| *string*

Inherited from: [ServerException](core.serverexception.md).[sqlState](core.serverexception.md#sqlstate)

Defined in: [packages/core/src/exceptions.ts:8](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L8)

___

### stack

• `Optional` **stack**: *undefined* \| *string*

Inherited from: [ServerException](core.serverexception.md).[stack](core.serverexception.md#stack)

Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Inherited from: [ServerException](core.serverexception.md).[stackTraceLimit](core.serverexception.md#stacktracelimit)

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

Inherited from: [ServerException](core.serverexception.md)

Defined in: node_modules/@types/node/globals.d.ts:4
