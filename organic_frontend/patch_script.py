import os
import re

# Patch page.tsx
file_path = "app/registration/book-a-stand/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

# Add use client
if not content.startswith('"use client"'):
    content = '"use client";\n' + content

# Fix react-router-dom
content = content.replace('import { Link, useSearchParams } from "react-router-dom";', 'import Link from "next/link";\nimport { useSearchParams } from "next/navigation";')
content = content.replace('import { useNavigate } from "react-router-dom";', 'import { useRouter } from "next/navigation";')
content = content.replace('const navigate = useNavigate();', 'const router = useRouter();')
content = content.replace('navigate(', 'router.push(')

# Write back
with open(file_path, "w") as f:
    f.write(content)

# Create dummy UI components
os.makedirs("app/components/ui", exist_ok=True)
dummy_components = {
    "badge.tsx": 'export const Badge = ({ children, className, variant, onClick }: any) => <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`} onClick={onClick}>{children}</span>;',
    "button.tsx": 'export const Button = ({ children, className, type, disabled, onClick, variant }: any) => <button type={type} disabled={disabled} onClick={onClick} className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${className}`}>{children}</button>;',
    "input.tsx": 'export const Input = (props: any) => <input {...props} className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.className}`} />;',
    "label.tsx": 'export const Label = ({ children, className, htmlFor }: any) => <label htmlFor={htmlFor} className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>{children}</label>;',
    "checkbox.tsx": 'export const Checkbox = ({ id, checked, onCheckedChange, disabled, className }: any) => <input type="checkbox" id={id} checked={checked} disabled={disabled} onChange={(e) => onCheckedChange(e.target.checked)} className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} />;',
    "select.tsx": 'export const Select = ({ children, value, onValueChange, disabled }: any) => <div className="relative">{children}</div>;\nexport const SelectTrigger = ({ children, className, id }: any) => <div id={id} className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>{children}</div>;\nexport const SelectValue = ({ placeholder }: any) => <span>{placeholder}</span>;\nexport const SelectContent = ({ children }: any) => <div className="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80">{children}</div>;\nexport const SelectItem = ({ children, value }: any) => <div className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">{children}</div>;'
}

for filename, code in dummy_components.items():
    with open(f"app/components/ui/{filename}", "w") as f:
        f.write(code)

# Create mock lib/api.ts
os.makedirs("lib", exist_ok=True)
mock_api = """
export const SERVER_URL = 'http://localhost:5000';
export const API_URL = 'http://localhost:5000/api';
export const stallApi = { getStallsByEvent: async () => ({ data: { data: [] } }) };
export const stallRateApi = { getStallRatesByEvent: async () => ({ data: { data: [] } }) };
export const exhibitorRegistrationApi = { createRegistration: async () => ({ data: { success: true } }) };
export const eventApi = { getActiveEvent: async () => ({ data: { data: { id: 1 } } }) };
export const settingsApi = { getSettings: async () => ({ data: { data: {} } }) };
export const termsApi = { getTerms: async () => ({ data: { data: {} } }) };
export const publicApi = { getSomething: async () => ({ data: { data: {} } }) };
export const verifyApi = { verifyPayment: async () => ({ data: { success: true } }) };
export const heroBackgroundApi = { getActiveBackground: async () => ({ data: { data: { image: '' } } }) };
export const crmApi = { getCRM: async () => ({ data: { data: [] } }) };
export const eventHighlightsApi = { getHighlights: async () => ({ data: { data: [] } }) };
export const countersApi = { getCounters: async () => ({ data: { data: [] } }) };
export const adminApi = { getAdmin: async () => ({ data: { data: [] } }) };
"""
with open("lib/api.ts", "w") as f:
    f.write(mock_api)

print("Patching complete.")
