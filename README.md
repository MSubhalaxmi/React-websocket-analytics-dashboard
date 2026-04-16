**Real-Time Fleet Analytics Dashboard (React + WebSockets)**

**Overview**
This repository contains a real-time analytics dashboard for visualizing fleet telemetry data and monitoring vehicle metrics.

The application is designed to consume live data streams from backend services and render updates with minimal latency, enabling efficient decision-making for fleet operations.


**Architecture Summary**
- Real-time communication using WebSockets
- Component-driven UI architecture using React
- State management using React hooks
- Backend integration via REST and GraphQL APIs
- Reverse proxy configuration using Nginx

**Tech Stack**

**Frontend:** React  
**Real-Time Communication:** WebSockets  
**State Management:** React Hooks  
**API Integration:** Fetch, GraphQL  
**Testing:** Jest  
**Deployment:** Nginx, Docker  


**Key Features**

**Live Data Streaming**
- Establishes persistent WebSocket connections
- Receives continuous telemetry updates
- Efficiently updates UI components in real time

**Dashboard Visualization**
- Displays vehicle metrics such as speed and status
- Modular component-based architecture
- Designed for scalability with large datasets

**Alert System**
- Detects threshold breaches such as overspeeding
- Provides instant notifications to users
- Easily extendable for advanced rules

**API Integration**
- Fetches historical data via REST APIs
- Uses GraphQL for optimized queries
- Seamless communication with backend systems

**Performance Highlights**
- User interface updates within one second
- Supports high concurrent WebSocket connections
- Efficient rendering using React lifecycle optimization
- Reduced API overhead through optimized queries


**Component Structure**

**components  :** Reusable UI components  
**services    :** API and WebSocket logic  
**hooks       :** Custom React hooks  
**styles      :** Styling and layout  
**tests       :** Test cases  


**User Experience Features**
- Live telemetry feed
- Real-time alert notifications
- Responsive layout for multiple devices
- Continuous data refresh without page reload


**Data Flow**
1. WebSocket connection is established with backend
2. Incoming telemetry data is pushed into application state
3. UI components re-render with updated values
4. Alerts are triggered based on predefined conditions


**Testing Strategy**
- Unit testing using Jest
- Component rendering validation
- Mocking WebSocket connections
- API response testing

**Deployment**

**Nginx Configuration**
- Routes frontend traffic
- Proxies API requests to backend
- Enables production-ready deployment setup

**Getting Started**

**Prerequisites**
- Node.js version 18 or higher
- npm or yarn

**Run Locally**

npm install  
npm start  


**Project Structure**
src         : Main application code  
components  : UI components  
services    : API and socket logic  
hooks       : Custom hooks  
public      : Static assets  
tests       : Test cases  

**Integration Guide**
WebSocket endpoint: ws://localhost:8000/ws  
API base URL: http://localhost:8000/api  

**Future Enhancements**
- Advanced charting libraries integration
- Role-based dashboards
- Dark mode support
- Progressive Web App capabilities
- Real-time map-based tracking

