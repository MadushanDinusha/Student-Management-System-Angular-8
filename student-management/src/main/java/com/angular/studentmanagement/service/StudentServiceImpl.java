package com.angular.studentmanagement.service;

import com.angular.studentmanagement.domain.Student;
import com.angular.studentmanagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public void addStudent(Student student){
        studentRepository.save(student);
    }

    @Override
    public List<Student> getAll(){
        return studentRepository.findAll();
    }

    @Override
    public Optional<Student> getById(long id){
        return studentRepository.findById(id);
    }

    @Override
    public void deleteById(long id){
        studentRepository.deleteById(id);
    }

    @Override
    public void updateById(Student studentObj, long id){
        Student student =studentRepository.getOne(id);
        student.setAddress(studentObj.getAddress());
        student.setName(studentObj.getName());
        student.setPhone(studentObj.getPhone());
        student.setGrade(studentObj.getGrade());
        student.setLastUpdatedDate(studentObj.getLastUpdatedDate());
        studentRepository.save(student);
    }
}
