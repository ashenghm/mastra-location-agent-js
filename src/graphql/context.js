import { LocationAgent } from '../agents/location-agent.js';
import { AILocationAgent } from '../agents/ai-location-agent.js';

/**
 * Creates GraphQL context with environment and agents
 * @param {Request} request - The incoming request
 * @param {Object} agents - Agent instances
 * @param {LocationAgent} agents.locationAgent - Location agent instance
 * @param {AILocationAgent} agents.aiLocationAgent - AI location agent instance
 * @returns {Object} GraphQL context
 */
export function createContext(
  request, 
  agents
) {
  // Extract client IP from various headers
  const clientIP = 
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    request.headers.get('X-Real-IP') ||
    request.headers.get('X-Client-IP') ||
    '127.0.0.1';

  return {
    ...agents,
    clientIP,
  };
}
