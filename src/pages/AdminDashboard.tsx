
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Users, Clock, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  students: number;
  highlights: string[];
}

const AdminDashboard = () => {
  const { toast } = useToast();
  const [courses, setCourses] = useState<Course[]>([
    {
      id: '1',
      title: "AI Fundamentals",
      description: "Learn the basics of artificial intelligence, machine learning, and neural networks.",
      duration: "8 weeks",
      level: "Beginner",
      students: 500,
      highlights: ["Machine Learning Basics", "Neural Networks", "Python Programming", "Hands-on Projects"]
    },
    {
      id: '2',
      title: "Advanced AI Development",
      description: "Deep dive into advanced AI concepts, model development, and deployment strategies.",
      duration: "12 weeks",
      level: "Advanced",
      students: 200,
      highlights: ["Deep Learning", "Model Deployment", "AI Ethics", "Real-world Applications"]
    },
    {
      id: '3',
      title: "Chatbot Development",
      description: "Build intelligent conversational AI systems and chatbots for business applications.",
      duration: "6 weeks",
      level: "Intermediate",
      students: 300,
      highlights: ["NLP Processing", "Dialog Systems", "Integration", "Analytics"]
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    level: 'Beginner' as Course['level'],
    highlights: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const highlightsArray = formData.highlights.split(',').map(h => h.trim()).filter(h => h);
    
    if (editingCourse) {
      setCourses(courses.map(course => 
        course.id === editingCourse.id 
          ? { ...course, ...formData, highlights: highlightsArray }
          : course
      ));
      toast({
        title: "Course Updated",
        description: "The course has been successfully updated.",
      });
    } else {
      const newCourse: Course = {
        id: Date.now().toString(),
        ...formData,
        students: 0,
        highlights: highlightsArray
      };
      setCourses([...courses, newCourse]);
      toast({
        title: "Course Added",
        description: "New course has been successfully added.",
      });
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      duration: '',
      level: 'Beginner',
      highlights: ''
    });
    setEditingCourse(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: course.description,
      duration: course.duration,
      level: course.level,
      highlights: course.highlights.join(', ')
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
    toast({
      title: "Course Deleted",
      description: "The course has been successfully deleted.",
      variant: "destructive"
    });
  };

  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Academy Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your AI training courses and monitor student progress
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudents}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8 weeks</div>
            </CardContent>
          </Card>
        </div>

        {/* Courses Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Course Management</CardTitle>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => resetForm()}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Course
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <form onSubmit={handleSubmit}>
                    <DialogHeader>
                      <DialogTitle>
                        {editingCourse ? 'Edit Course' : 'Add New Course'}
                      </DialogTitle>
                      <DialogDescription>
                        {editingCourse ? 'Update the course details below.' : 'Fill in the details for the new course.'}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="title">Course Title</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Input
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="duration">Duration</Label>
                          <Input
                            id="duration"
                            placeholder="e.g., 8 weeks"
                            value={formData.duration}
                            onChange={(e) => setFormData({...formData, duration: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="level">Level</Label>
                          <select
                            id="level"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            value={formData.level}
                            onChange={(e) => setFormData({...formData, level: e.target.value as Course['level']})}
                          >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="highlights">Course Highlights (comma-separated)</Label>
                        <Input
                          id="highlights"
                          placeholder="e.g., Machine Learning, Python, Projects"
                          value={formData.highlights}
                          onChange={(e) => setFormData({...formData, highlights: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <DialogFooter>
                      <Button type="button" variant="outline" onClick={resetForm}>
                        Cancel
                      </Button>
                      <Button type="submit">
                        {editingCourse ? 'Update Course' : 'Add Course'}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{course.title}</div>
                        <div className="text-sm text-muted-foreground truncate max-w-xs">
                          {course.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={course.level === 'Beginner' ? 'secondary' : 
                                course.level === 'Intermediate' ? 'default' : 'destructive'}
                      >
                        {course.level}
                      </Badge>
                    </TableCell>
                    <TableCell>{course.duration}</TableCell>
                    <TableCell>{course.students}+</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(course)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(course.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
