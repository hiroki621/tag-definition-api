import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'tag_definitions.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContents);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json(data);
  } catch (error) {
    console.error('Error loading tag_definitions.json:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
