import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState('coding'); // State to track which category is selected
  const [buttons, setButtons] = useState([]);

  const renderProblems = () => {
    // Logic to render problems based on selectedCategory state
    if (selectedCategory === 'coding') {
      return (
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-white">
              <TableHead>Title</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden sm:table-cell">Difficulty</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Coding problems data */}
            {/* Sample data, replace with your actual data */}
            <TableRow>
              <TableCell>
                <div className="font-medium">Problem 1</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Reinforcement Learning</TableCell>
              <TableCell className="hidden sm:table-cell">
                <span className="text-lg font-bold text-green-600">Easy</span>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <span className="text-black">Solved</span>
              </TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      );
    } else if (selectedCategory === 'mcq') {
      return (
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-white">
              <TableHead>Title</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden sm:table-cell">Difficulty</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* MCQ problems data */}
            {/* Sample data, replace with your actual data */}
            <TableRow>
              <TableCell>
                <div className="font-xl">MCQ Problem 1</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Category A</TableCell>
              <TableCell className="hidden sm:table-cell">
                <span className="text-lg font-bold text-green-600">Easy</span>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <span className="text-black">Solved</span>
              </TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      );
    }
  };

  const renderButtons = () => {
    return buttons.map((buttonText, index) => (
      <Button key={index} variant="default" className="ml-2 py-1 px-2 text-sm w-[200px] rounded-2xl">
        {buttonText}
      </Button>
    ));
  };

  const handleCodingProblemsClick = () => {
    setSelectedCategory('coding');
    setButtons(['Linear ALgebra', 'Machine Learning']);
  };

  const handleMcqProblemsClick = () => {
    setSelectedCategory('mcq');
    setButtons(['Linear ALgebra', 'Machine Learning', 'Deep Learning', 'NLP', 'Reinforcemnet Learning','Generative AI']);
  };

  return (
    <Card>
      <CardHeader className="px-7">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Button variant="default" className="mr-3" onClick={handleCodingProblemsClick}>
              Coding Problems
            </Button>
            <Button variant="default" onClick={handleMcqProblemsClick}>
              MCQ Problems
            </Button>
          </div>
          <div className="flex flex-row mt-3">
            {renderButtons()}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {renderProblems()}
      </CardContent>
    </Card>
  );
}
