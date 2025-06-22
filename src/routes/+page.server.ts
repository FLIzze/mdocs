import fs from 'fs';
import path from 'path';
import readline from 'readline';
import type {MdFormat} from '$lib/types';

export async function load() {
        const filePath = path.join(process.cwd(), 'src/lib/README.md');

        const values: MdFormat[] = [];
        let content = "";
        let isCurrent = false;
        let level = "";

        const lines = readline.createInterface({
                input: fs.createReadStream(filePath),
                crlfDelay: Infinity
        });

        for await (const line of lines) {
                if (line.startsWith("#")) {
                        if (!isCurrent) {
                                level = line;
                                isCurrent = true;
                                continue;
                        }

                        addToValues();
                        content = "";
                        level = line;
                } else {
                        if (line === "") continue;
                        content += line;
                }
        }
        addToValues();

        function addToValues() {
                const header = level.substring(0, level.indexOf(" "));
                let title = level.substring(level.indexOf(" ") + 1);
                title = paddingLeft(title, header.length);
                values.push({level: header.length, title, content});
        }

        function paddingLeft(text: string, level: number): string {
                const tabSpace = 2;
                let returnValue = '';

                if (level === 1) {
                        return text;
                }

                for (let i = 1; i < level * tabSpace; i++) {
                        returnValue += ' ';
                }

                return returnValue + text;
        }

        return {sections: values};
}
