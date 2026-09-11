const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'IHWE-admin/src/pages');

// List of folders we moved files into
const folders = [
    'awards', 'speakers', 'exhibitors', 'conference', 'partners',
    'buyers', 'cms', 'finance', 'admin_settings', 'enquiries'
];

for (const folder of folders) {
    const dirPath = path.join(PAGES_DIR, folder);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));
    
    for (const file of files) {
        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        let modified = false;

        // Replace relative imports starting with `../` to `../../`
        // We only want to target imports like: import X from '../...'
        // or: from '../...' or: require('../...')
        // Regex to match from/require statements with `../`
        const regex1 = /from\s+['"]\.\.\/([^'"]+)['"]/g;
        if (regex1.test(content)) {
            content = content.replace(regex1, `from "../../$1"`);
            modified = true;
        }

        const regex2 = /import\s+['"]\.\.\/([^'"]+)['"]/g;
        if (regex2.test(content)) {
            content = content.replace(regex2, `import "../../$1"`);
            modified = true;
        }

        const regex3 = /require\(['"]\.\.\/([^'"]+)['"]\)/g;
        if (regex3.test(content)) {
            content = content.replace(regex3, `require("../../$1")`);
            modified = true;
        }
        
        // Also fix `./` imports if they were pointing to a file that wasn't moved.
        // Wait, if they were pointing to another page file, that page might have also moved!
        // But let's assume they were pointing to sibling components. If they moved together, 
        // they are still `./`. If not, we might have broken links.
        // For now, let's fix `../` -> `../../`.

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed imports in ${folder}/${file}`);
        }
    }
}
console.log('Finished updating imports inside moved files.');
