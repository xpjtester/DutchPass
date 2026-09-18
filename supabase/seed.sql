insert into courses(title,level,description,position) values ('DutchPass Foundation','A1-B1','Practical Dutch for daily life and integration.',1);
insert into lessons(course_id,title,description,position) select id,'Kennismaken','Introduce yourself and greet people.',1 from courses where title='DutchPass Foundation';
insert into lessons(course_id,title,description,position) select id,'Restaurant','Order politely and pay.',2 from courses where title='DutchPass Foundation';
insert into exercises(lesson_id,type,question,answer,explanation,position) select id,'writing','Write: I live in Amsterdam.','Ik woon in Amsterdam.','Use ik + woon.',1 from lessons where title='Kennismaken';
