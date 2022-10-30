import React from 'react';
import { Sidebar } from 'flowbite-react';

export function AppSidebar () {
  return (
    <Sidebar aria-label="Default sidebar">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            label="Pro"
            labelColor="alternative"
          >
            Kanban
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            label="3"
          >
            Inbox
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
          >
            Users
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
          >
            Products
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
          >
            Sign In
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
          >
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
