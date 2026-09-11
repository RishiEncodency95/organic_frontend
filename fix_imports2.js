const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'IHWE-admin/src/pages');

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

        // Replace `./` imports. 
        // We know these files were moved from `src/pages/` to `src/pages/folder/`.
        // So a previous `./XYZ` meant `src/pages/XYZ`. Now it's relative to `src/pages/folder/`.
        // We need to change `./XYZ` to `../XYZ`.
        // EXCEPT if XYZ was ALSO moved into `src/pages/folder/`! But let's just make everything `../XYZ` first, 
        // and if it actually moved, we can fix it later. Actually, it's safer to just do `../XYZ` for ALL `./` imports, 
        // and then check if the file exists in the current folder.
        // Wait, what if there are imports like `./styles.css`? They will become `../styles.css`.
        
        const replaceRelative = (match, p1) => {
            // p1 is the path without `./`
            // Example: `dashboard/DashboardHeader` or `components/Whatever`
            // We change it to `../${p1}`
            return `from "../${p1}"`;
        };
        const regex1 = /from\s+['"]\.\/([^'"]+)['"]/g;
        if (regex1.test(content)) {
            content = content.replace(regex1, replaceRelative);
            modified = true;
        }

        const replaceRelativeImport = (match, p1) => {
            return `import "../${p1}"`;
        };
        const regex2 = /import\s+['"]\.\/([^'"]+)['"]/g;
        if (regex2.test(content)) {
            content = content.replace(regex2, replaceRelativeImport);
            modified = true;
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed ./ imports in ${folder}/${file}`);
        }
    }
}
