import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'tag_definitions.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(data);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Failed to load tag definitions:', error);
    res.status(500).json({ error: 'Failed to load tag definitions' });
  }
}
