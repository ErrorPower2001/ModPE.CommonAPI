# AGENTS.md - ModPE.CraftLib

## Project Overview

Minecraft ModPE (Pocket Edition) script/resource pack providing a convenience API layer on top of BlockLauncher's ModPE scripting engine.

**Author**: 我的世界之血狼 (Baidu Tieba / QQ: 1366329192)

## Architecture

```
script/main.js          ← Entry point, loads modules in order
texture/code/
  constants.js          ← Item/tool types, enchantment mappings
  namespace.js          ← CraftLib array + API aliases
  state.js              ← Tool registry, block data tables, vein shapes
  hooks.js              ← Hook declarations + implementations
  functions.js          ← Helper functions + all API functions
texture/images/         ← Textures for items, blocks, armor, mobs
```

## Code Loading

`main.js` loads modules via `eval(ModPE.getBytesFromTexturePack(...))` in dependency order:
1. `constants.js` → 2. `namespace.js` → 3. `state.js` → 4. `hooks.js` → 5. `functions.js`

## Namespace

```javascript
CraftLib = [CraftLibAPI, ModPE, Level, Player, Entity, Item, Block, Server];
```

Access: `API.setItem(...)` or `CraftLib[0].setItem(...)`

## API Reference

| Function | Purpose |
|---|---|
| `API.setItem(id, [tex, data], name, [type, subType], maxDmg)` | Register item or tool |
| `API.generateOre(id, data, count, maxH, replaceId)` | Ore vein generation |
| `API.setToolDestroyTime_Pickaxe/Axe/Shovel/Shears(speed)` | Set tool mining speed |
| `API.saveData(path, content)` | Write file (UTF-8) |
| `API.readData(path, encoding)` | Read file |

## Tool Speed System

Custom tools use a temporary vanilla-tool-swap trick:
- `startDestroyBlock`: sets block destroy times for the custom tool type
- `attackHook`/`destroyBlock`: swaps custom tool → vanilla diamond tool (preserving enchants)
- `modTick`: restores custom tool when vanilla tool is "used up"

Tool types: `0`=pickaxe, `1`=axe, `2`=shovel, `3`=sword

## Hook System

Hooks have two extension points:
- `xxxHook_` - User-extensible (defined in external config file, e.g. `attackHook_`)
- `hookXxx` - Framework internal (e.g. `hookAttack`)

Both are called if defined. Some support `preventDefault()`.

User config: `/sdcard/games/com.mojang/[ModPE]CraftLib/[ModPE][API]CraftLib.JS`