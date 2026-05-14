# AGENTS.md - ModPE.ForgottenCraft

## Project Overview

Minecraft ModPE (Pocket Edition) script/resource pack providing a convenience API layer on top of BlockLauncher's ModPE scripting engine.

**Author**: 我的世界之血狼 (Baidu Tieba / QQ: 1366329192)

## Architecture

| File | Role |
|---|---|
| `script/main.js` | Entry point: loads code from texture pack, initializes user config |
| `texture/ForgottenCraft.Function.BloodWolf.X` | Namespace initialization (loaded first) |
| `texture/ForgottenCraft.Function.BloodWolf` | Core API functions + all ModPE hooks (loaded second) |
| `texture/images/` | Textures for items, blocks, armor, mobs |

## Code Loading Mechanism

Code is stored as **extensionless JS files** in `texture/` and loaded via:
```javascript
eval(new java.lang.String(ModPE.getBytesFromTexturePack("filename"), "UTF-8"));
```
The `loadTexturePackScript()` function in `main.js` handles this (parameter 0 = `.X` suffix, 1 = no suffix).

## Namespace

```javascript
ForgottenCraft = [ForgottenCraftAPI, ModPE, Level, Player, Entity, Item, Block, Server];
```

Access: `ForgottenCraft[0].setItem(...)` or use the local aliases `API`, `_ModPE`, `_Level`, etc.

## API Reference (ForgottenCraft[0])

| Function | Purpose |
|---|---|
| `setItem(id, [tex, data], name, [type, subType], maxDmg)` | Register item or tool |
| `setBlock([[id, name], blockType], textures, lightLevel, renderType)` | Register block |
| `setBlockShape([id, data], [[x1,x2],[y1,y2],[z1,z2]])` | Set collision box |
| `dropItem([x,y,z], [id, count, data])` | Drop item at position |
| `canSeeSky(x, y, z)` | Check sky exposure |
| `generateOre(id, data, count, maxH, replaceId)` | Ore vein generation |
| `saveData(path, content)` | Write file (UTF-8) |
| `readData(path, encoding)` | Read file |

## Tool Speed System

Custom tools use a temporary vanilla-tool-swap trick:
- On `startDestroyBlock`: sets block destroy times for the custom tool type
- On `attackHook`/`destroyBlock`: swaps custom tool → vanilla diamond tool (preserving enchants)
- On `modTick`: restores custom tool when vanilla tool is "used up"

Tool types: `0`=pickaxe, `1`=axe, `2`=shovel, `3`=sword

## Hook System

Hooks have two extension points:
- `xxxHook_` - User-extensible (defined in external config file, e.g. `attackHook_`)
- `hookXxx` - Framework internal (e.g. `hookAttack`)

Both are called if defined. Some support `preventDefault()`.

User config stored at: `/sdcard/games/com.mojang/[ModPE]ForgottenCraft/[ModPE][API]ForgottenCraft.JS`

## Language

Code uses Chinese variable names in some places (legacy). Comments are bilingual.
