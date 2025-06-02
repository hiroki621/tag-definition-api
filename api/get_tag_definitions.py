import { NextApiRequest, NextApiResponse } from 'next';
import tagDefinitions from '../../data/tag_definitions.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');  // ✅ UTF-8明示
  res.status(200).json(tagDefinitions);
}
