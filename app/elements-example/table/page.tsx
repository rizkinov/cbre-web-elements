"use client";

import * as React from "react";
import Link from "next/link";
import { CBREButton } from "@/components/cbre-button";
import {
  CBRETable,
  CBRETableBody,
  CBRETableCaption,
  CBRETableCell,
  CBRETableFooter,
  CBRETableHead,
  CBRETableHeader,
  CBRETableRow,
} from "@/components/cbre-table";
import { Badge } from "@/components/ui/badge";

// Sample data for the tables
const propertyData = [
  {
    id: "PRO001",
    name: "Downtown Office Tower",
    location: "Los Angeles, CA",
    type: "Office",
    status: "Active",
    sqft: "250,000",
  },
  {
    id: "PRO002",
    name: "Westfield Shopping Mall",
    location: "San Francisco, CA",
    type: "Retail",
    status: "Under Contract",
    sqft: "500,000",
  },
  {
    id: "PRO003",
    name: "Harbor Industrial Park",
    location: "Seattle, WA",
    type: "Industrial",
    status: "Active",
    sqft: "750,000",
  },
  {
    id: "PRO004",
    name: "Central Business Complex",
    location: "New York, NY",
    type: "Mixed Use",
    status: "In Development",
    sqft: "400,000",
  },
];

const invoiceData = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "Credit Card",
  },
];

export default function TableExamplePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-10 px-4 md:px-10 max-w-5xl mx-auto">
        <h1 className="text-6xl font-financier text-cbre-green mb-6">Table Component</h1>
        <p className="text-dark-grey font-calibre mb-10 max-w-3xl">
          Tables are used to organize and display data in a structured format. They help users compare
          and analyze information efficiently through rows and columns.
        </p>

        {/* Basic Table */}
        <div className="mb-16">
          <h2 className="text-4xl font-financier text-cbre-green mb-5">Basic Table</h2>
          <div className="bg-[var(--lighter-grey)] p-4 md:p-8">
            <div className="border border-light-grey bg-white p-8 max-w-4xl mx-auto">
              <CBRETable>
                <CBRETableCaption>A list of recent invoices</CBRETableCaption>
                <CBRETableHeader>
                  <CBRETableRow>
                    <CBRETableHead>Invoice</CBRETableHead>
                    <CBRETableHead>Status</CBRETableHead>
                    <CBRETableHead>Method</CBRETableHead>
                    <CBRETableHead className="text-right">Amount</CBRETableHead>
                  </CBRETableRow>
                </CBRETableHeader>
                <CBRETableBody>
                  {invoiceData.map((invoice) => (
                    <CBRETableRow key={invoice.invoice}>
                      <CBRETableCell className="font-medium">{invoice.invoice}</CBRETableCell>
                      <CBRETableCell>
                        <Badge
                          variant={
                            invoice.paymentStatus === "Paid"
                              ? "success"
                              : invoice.paymentStatus === "Pending"
                              ? "warning"
                              : "destructive"
                          }
                        >
                          {invoice.paymentStatus}
                        </Badge>
                      </CBRETableCell>
                      <CBRETableCell>{invoice.paymentMethod}</CBRETableCell>
                      <CBRETableCell className="text-right">{invoice.totalAmount}</CBRETableCell>
                    </CBRETableRow>
                  ))}
                </CBRETableBody>
                <CBRETableFooter>
                  <CBRETableRow>
                    <CBRETableCell colSpan={3}>Total</CBRETableCell>
                    <CBRETableCell className="text-right">$1,750.00</CBRETableCell>
                  </CBRETableRow>
                </CBRETableFooter>
              </CBRETable>
            </div>
          </div>

          <div className="bg-white p-6 border border-light-grey mt-6">
            <h3 className="text-lg font-calibre font-medium text-dark-grey mb-3">Implementation</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<CBRETable>
  <CBRETableCaption>A list of recent invoices</CBRETableCaption>
  <CBRETableHeader>
    <CBRETableRow>
      <CBRETableHead>Invoice</CBRETableHead>
      <CBRETableHead>Status</CBRETableHead>
      <CBRETableHead>Method</CBRETableHead>
      <CBRETableHead className="text-right">Amount</CBRETableHead>
    </CBRETableRow>
  </CBRETableHeader>
  <CBRETableBody>
    {invoiceData.map((invoice) => (
      <CBRETableRow key={invoice.invoice}>
        <CBRETableCell>{invoice.invoice}</CBRETableCell>
        <CBRETableCell>
          <Badge variant={getVariant(invoice.status)}>
            {invoice.paymentStatus}
          </Badge>
        </CBRETableCell>
        <CBRETableCell>{invoice.paymentMethod}</CBRETableCell>
        <CBRETableCell className="text-right">
          {invoice.totalAmount}
        </CBRETableCell>
      </CBRETableRow>
    ))}
  </CBRETableBody>
</CBRETable>`}
            </pre>
          </div>
        </div>

        {/* Complex Table */}
        <div className="mb-16">
          <h2 className="text-4xl font-financier text-cbre-green mb-5">Property Listing Table</h2>
          <div className="bg-[var(--lighter-grey)] p-4 md:p-8">
            <div className="border border-light-grey bg-white p-8 max-w-4xl mx-auto">
              <CBRETable>
                <CBRETableCaption>Active Property Portfolio</CBRETableCaption>
                <CBRETableHeader>
                  <CBRETableRow>
                    <CBRETableHead>Property ID</CBRETableHead>
                    <CBRETableHead>Name</CBRETableHead>
                    <CBRETableHead>Location</CBRETableHead>
                    <CBRETableHead>Type</CBRETableHead>
                    <CBRETableHead>Status</CBRETableHead>
                    <CBRETableHead className="text-right">Square Feet</CBRETableHead>
                  </CBRETableRow>
                </CBRETableHeader>
                <CBRETableBody>
                  {propertyData.map((property) => (
                    <CBRETableRow key={property.id}>
                      <CBRETableCell className="font-medium">{property.id}</CBRETableCell>
                      <CBRETableCell>{property.name}</CBRETableCell>
                      <CBRETableCell>{property.location}</CBRETableCell>
                      <CBRETableCell>{property.type}</CBRETableCell>
                      <CBRETableCell>
                        <Badge
                          variant={
                            property.status === "Active"
                              ? "success"
                              : property.status === "Under Contract"
                              ? "warning"
                              : "default"
                          }
                        >
                          {property.status}
                        </Badge>
                      </CBRETableCell>
                      <CBRETableCell className="text-right">{property.sqft}</CBRETableCell>
                    </CBRETableRow>
                  ))}
                </CBRETableBody>
                <CBRETableFooter>
                  <CBRETableRow>
                    <CBRETableCell colSpan={5}>Total Square Footage</CBRETableCell>
                    <CBRETableCell className="text-right">1,900,000</CBRETableCell>
                  </CBRETableRow>
                </CBRETableFooter>
              </CBRETable>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/elements-example">
            <CBREButton variant="outline">Back to Elements</CBREButton>
          </Link>
        </div>
      </div>
    </div>
  );
} 