function ret = model2js(model)

  hidden_units = size(model.hid_to_class,2);

  fid = fopen ('model.js', 'w');
  template = s = ['[', repmat(['%f, '] , 1, 256), '],\n'];
  fprintf(fid, 'let input_to_hid = [');
  fprintf(fid, template, model.input_to_hid');
  fprintf(fid, '];\n\n');

  template = s = ['[', repmat(['%f, '], 1, hidden_units), '],\n'];
  fprintf(fid, 'let hid_to_class = [');
  fprintf(fid, template, model.hid_to_class');
  fprintf(fid, '];\n\n');

  fprintf(fid, 'export default {input_to_hid, hid_to_class};');

  fclose (fid);

end
