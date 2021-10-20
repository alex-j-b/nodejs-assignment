/*
 * Generated type guards for "Player.ts".
 * WARNING: Do not manually change this file.
 */
import { Player } from "./Player";

export function isPlayer(obj: any, _argumentName?: string): obj is Player {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj.team === "string" &&
        typeof obj.name === "string" &&
        typeof obj.points === "number" &&
        typeof obj.isActive === "boolean"
    )
}
